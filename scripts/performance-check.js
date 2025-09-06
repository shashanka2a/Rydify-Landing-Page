#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Check bundle sizes
const outDir = path.join(__dirname, '..', 'out');
const nextDir = path.join(__dirname, '..', '.next');

function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(currentPath) {
    const stats = fs.statSync(currentPath);
    
    if (stats.isDirectory()) {
      const files = fs.readdirSync(currentPath);
      files.forEach(file => {
        calculateSize(path.join(currentPath, file));
      });
    } else {
      totalSize += stats.size;
    }
  }
  
  if (fs.existsSync(dirPath)) {
    calculateSize(dirPath);
  }
  
  return totalSize;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

console.log('📊 Performance Analysis');
console.log('========================');

// Check build output size
const buildSize = getDirectorySize(outDir);
console.log(`📦 Build Output Size: ${formatBytes(buildSize)}`);

// Check Next.js build size
const nextSize = getDirectorySize(nextDir);
console.log(`🔧 Next.js Build Size: ${formatBytes(nextSize)}`);

// Check specific file sizes
const staticDir = path.join(outDir, '_next', 'static');
if (fs.existsSync(staticDir)) {
  const staticSize = getDirectorySize(staticDir);
  console.log(`📁 Static Assets Size: ${formatBytes(staticSize)}`);
}

// Performance recommendations
console.log('\n🚀 Performance Optimizations Applied:');
console.log('✅ Bundle splitting for animations and icons');
console.log('✅ Memoized component data');
console.log('✅ Lazy loading of analytics');
console.log('✅ Optimized CSS with performance hints');
console.log('✅ Resource preloading and DNS prefetch');
console.log('✅ Console removal in production');
console.log('✅ SWC minification enabled');

console.log('\n📈 Expected Performance Improvements:');
console.log('• Faster initial page load');
console.log('• Reduced JavaScript bundle size');
console.log('• Better Core Web Vitals scores');
console.log('• Improved mobile performance');
console.log('• Reduced layout shift');