// Re-export all Google Drive functions for easy imports

// Client functions
export {
  createDriveClient,
  getOrCreateFolder,
  createCourseFolderStructure,
  getPaymentProofFolder,
  deleteFile as deleteDriveFile,
  hasGoogleDriveAccess,
} from './client';

export type { GoogleDriveClientOptions } from './client';

// Upload functions
export {
  uploadFile,
  uploadMultipleFiles,
  uploadCourseMaterial,
  uploadAssignmentFile,
  uploadSubmission as uploadStudentSubmission,
  uploadPaymentProof,
  updateFileMetadata,
  shareFile,
  makeFilePublic,
  fileToBuffer,
  validateFileSize,
  validateFileType,
  getExtensionFromMimeType,
} from './upload';

export type { UploadResult, UploadOptions } from './upload';

// File management functions
export {
  listFiles,
  getFileMetadata,
  downloadFile,
  getFilePublicUrl,
  deleteFile,
  copyFile,
  moveFile,
  searchFiles,
  getFilesByType,
  getUserFiles,
  trackFileDownload,
  getFileInfo,
  incrementDownloadCount,
  softDeleteFile,
} from './files';

export type { FileInfo, ListFilesOptions } from './files';
