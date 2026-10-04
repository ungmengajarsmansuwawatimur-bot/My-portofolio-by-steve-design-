/**
 * Utility to immediately trigger official CV PDF download
 * for Taufik Hidayat Malii.
 */
export const downloadCv = () => {
  const cvUrl = '/CV_Taufik_Hidayat_Malii.pdf';
  const fileName = 'CV_Taufik_Hidayat_Malii.pdf';

  const link = document.createElement('a');
  link.href = cvUrl;
  link.setAttribute('download', fileName);
  link.setAttribute('target', '_blank');
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
