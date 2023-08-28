import * as FileSystem from 'expo-file-system';

export function getGalleryFolder() {
  return `${FileSystem.documentDirectory}Gallery`;
}

export async function getNewImageFilepath() {
  let galleryFolder = getGalleryFolder();
  await FileSystem.makeDirectoryAsync(galleryFolder, {
    intermediates: true,
  });
  const timestamp = new Date().getTime();
  const filename = `photo_${timestamp}.jpg`;
  return `${galleryFolder}/${filename}`;
}
