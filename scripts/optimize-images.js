
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
    targetDir: path.join(__dirname, '../public/Images'),
    maxSizeKB: 200,
    maxWidth: 1920,
    quality: 80,
    exclude: []
};

// Utilities
const formatSize = (bytes) => (bytes / 1024).toFixed(2) + ' KB';

async function processFile(filePath) {
    try {
        const stats = fs.statSync(filePath);
        const sizeKB = stats.size / 1024;

        // Skip if small enough or not an image
        if (sizeKB <= CONFIG.maxSizeKB || !/\.(jpg|jpeg|png|webp)$/i.test(filePath)) {
            return { processed: false };
        }

        // Disable cache to prevent file locking on Windows
        sharp.cache(false);

        console.log(`Processing: ${path.basename(filePath)} (${formatSize(stats.size)})`);

        const image = sharp(filePath);
        const metadata = await image.metadata();

        // Resize if too wide
        if (metadata.width > CONFIG.maxWidth) {
            image.resize(CONFIG.maxWidth);
        }

        // Compress
        const tempPath = filePath + '.tmp';

        await image
            .webp({ quality: CONFIG.quality })
            .toFile(tempPath);

        // Check if new file is actually smaller
        const newStats = fs.statSync(tempPath);
        if (newStats.size < stats.size) {
            fs.renameSync(tempPath, filePath);
            console.log(`✅ Optimized: ${formatSize(stats.size)} -> ${formatSize(newStats.size)} (${((1 - newStats.size / stats.size) * 100).toFixed(0)}% saved)`);
            return { processed: true, original: stats.size, optimized: newStats.size };
        } else {
            fs.unlinkSync(tempPath);
            console.log(`⚠️ Skipped: Optimization didn't save space.`);
            return { processed: false };
        }

    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return { processed: false };
    }
}

async function walkDir(dir) {
    const files = fs.readdirSync(dir);
    let totalSaved = 0;

    for (const file of files) {
        if (file.endsWith('.tmp')) continue;
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            totalSaved += await walkDir(filePath);
        } else {
            const result = await processFile(filePath);
            if (result.processed) {
                totalSaved += (result.original - result.optimized);
            }
        }
    }
    return totalSaved;
}

// Main
(async () => {
    console.log('🚀 Starting Image Optimization...');
    const startTime = Date.now();

    if (!fs.existsSync(CONFIG.targetDir)) {
        console.error(`Target directory not found: ${CONFIG.targetDir}`);
        process.exit(1);
    }

    const savedBytes = await walkDir(CONFIG.targetDir);

    console.log('\n--- Summary ---');
    console.log(`🎉 Total Space Saved: ${formatSize(savedBytes)}`);
    console.log(`⏱️ Time taken: ${((Date.now() - startTime) / 1000).toFixed(2)}s`);
})();
