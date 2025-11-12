import sharp from 'sharp';
import path from 'path';

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }

  try {
    const filePath = req.file.path;
    const thumbPath = path.join(
      path.dirname(filePath),
      `${path.parse(filePath).name}_thumb.png`
    );

    await sharp(filePath)
      .resize(160, 160)
      .png()
      .toFile(thumbPath);

    console.log(`Thumbnail created: ${thumbPath}`);
  } catch (err) {
    console.error('Error creating thumbnail:', err);
  }

  next();
};

export { createThumbnail };
