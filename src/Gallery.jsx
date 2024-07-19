import React, { useState } from 'react';
import './App.css';
import photo1 from './assets/1be91948bb228ebc114f0e456b1c08f5.jpg';
import photo2 from './assets/1da2fa7abef80d5ddf7f613b0d35ea01.jpg';
import photo3 from './assets/1f4a45cfea56d4f83a3e734293122739.jpg';
import photo4 from './assets/2051c674b1a21b7dfc51570c719a1375.jpg';
import photo5 from './assets/25d3a261be199b92083c27ea368cc8c8.jpg';
import photo6 from './assets/26efc39b5ee916db2434e5e4b0302b17.jpg';
import photo7 from './assets/28841880b613e3b0a7a75010356d2b9f.jpg';
import photo8 from './assets/2bb3e6061086324777969341fb020576.jpg';
import photo9 from './assets/3099bba1a8682861c87b576e457870f5.jpg';
import photo10 from './assets/30a2f69bc691c6ca8ac2b2fc4f14b0ae.jpg';
import photo11 from './assets/30d1fe47a4c042f290efa6a1e07b39ce.jpg';
import photo12 from './assets/35609ee7271562567b9738d5d2d9dfe8.jpg';
import photo13 from './assets/360955faf0cb8c33460e723cc6e5551f.jpg';
import photo14 from './assets/444eab547d07c56a36cbed695f41c27f.jpg';
import photo15 from './assets/4c11d934f2f6ade784ebbc5df3d70c19.jpg';
import photo16 from './assets/51d2efa6755de788ec0b241862bb1b19.jpg';
import photo17 from './assets/52ea6d41c4332be6edcb3ade82d1dd6b.jpg';
import photo18 from './assets/538a2c8a20357a30fd711a430fb5f1c6.jpg';
import photo19 from './assets/587b57f888b1cdcc0e895cbdcfde1c1e.jpg';
import photo20 from './assets/5caf162cdb733a28b6f13bb563946426.jpg';
import photo21 from './assets/62a49356a1e81430d00a731c4cf469e9.jpg';
import photo22 from './assets/63159c7e9664da99901bee4d9d2effdd.jpg';
import photo23 from './assets/6d0a79411d20c0a0a526fa8b91ded7e3.jpg';
import photo24 from './assets/70dcf5baf62fc9df57f97b877b4162af.png';
import photo25 from './assets/7c59c6bff4bad535efb8d59dd5ffb9ad.jpg';
import photo26 from './assets/8c0ea3eec5d0d0ad3c2b54e67ee440cd.jpg';
import photo27 from './assets/8e77776215cfd0ec68f460c70d5e5b2b.jpg';
import photo28 from './assets/99c10baba717f0077a64c2188cbb3916.jpg';
import photo29 from './assets/9c5f75bcc3427cf7ce9a1047814063dc.jpg';
import photo30 from './assets/9d5e8b37cab3a21efd01f588b694cbb3.jpg';
import photo31 from './assets/a260d7537bf5b824ed858894148be0c1.jpg';
import photo32 from './assets/a56897f0f61d3aae5a1d9f4c9c4cfa68.jpg';
import photo33 from './assets/a74932ec274e2db0f7185a1fa0003733.jpg';
import photo34 from './assets/ab729fb4c488860c23b0653d75bace60.jpg';
import photo35 from './assets/af25917c7175c56cd744fcd3d521c511.jpg';
import photo36 from './assets/b70199fdadfa62ad9c1441b879f5895d.jpg';
import photo37 from './assets/bc7d19cf08324d629af1e5dfa2873f90.jpg';
import photo38 from './assets/c05ad86ab58c361871da3cd4979974a3.jpg';
import photo39 from './assets/c06e36fdaf034e5f4cb99e3b147571a9.jpg';
import photo40 from './assets/c7a55cfea5be3ed44979e6ee9b80d283.jpg';
import photo41 from './assets/cd5a5324ffdfdfbb2602e89a696bf762.jpg';
import photo42 from './assets/cefb18b2be052588d5b390016769c042.jpg';
import photo43 from './assets/d2d02b1dd2c0a0a83b5323eff0cf2ca8.jpg';
import photo44 from './assets/d2df937fda6560cc68b27cb7966d4f58.jpg';
import photo45 from './assets/d4ea09f0e6ee3c28b76358be9dd31fe2.jpg';
import photo46 from './assets/d7f03e03252f503667c099a78a332730.jpg';
import photo47 from './assets/dad5c701d80762e796e221f096858c7b.jpg';
import photo48 from './assets/de9e93adafb06164b63d62e9fe0640ff.jpg';
import photo49 from './assets/e37f96a97686498cdbda721706b10229.jpg';
import photo50 from './assets/e897b66dce4d1fa1ac031485d7d8152e.jpg';
import photo51 from './assets/eb704f9c92f1b34bb8db0462be1d5d89.jpg';
import photo52 from './assets/ef0b5eabdc1788247066711a8231331f.jpg';
import photo53 from './assets/f15d6da4edb719127c4d2613e0d465e6.jpg';
import photo54 from './assets/fd5188098f19524c7b772c34fd19caa7.jpg';

const photos = [
  { id: 1, src: photo1, alt: ' ' },
  { id: 2, src: photo2, alt: '   ' },
  { id: 3, src: photo3, alt: '' },
  { id: 4, src: photo4, alt: '' },
  { id: 5, src: photo5, alt: '' },
  { id: 6, src: photo6, alt: '' },
  { id: 7, src: photo7, alt: '' },
  { id: 8, src: photo8, alt: '' },
  { id: 9, src: photo9, alt: '' },
  { id: 10, src: photo10, alt: '' },
  { id: 11, src: photo11, alt: '' },
  { id: 12, src: photo12, alt: ' ' },
  { id: 13, src: photo13, alt: ' ' },
  { id: 14, src: photo14, alt: '' },
  { id: 15, src: photo15, alt: '' },
  { id: 16, src: photo16, alt: '' },
  { id: 17, src: photo17, alt: '' },
  { id: 18, src: photo18, alt: ' ' },
  { id: 19, src: photo19, alt: ' ' },
  { id: 20, src: photo20, alt: '' },
  { id: 21, src: photo21, alt: ""},
  { id: 22, src: photo22, alt: '' },
  { id: 23, src: photo23, alt: '' },
  { id: 24, src: photo24, alt: '' },
  { id: 25, src: photo25, alt: '' },
  { id: 26, src: photo26, alt: '' },
  { id: 27, src: photo27, alt: '' },
  { id: 28, src: photo28, alt: '' },
  { id: 29, src: photo29, alt: '' },
  { id: 30, src: photo30, alt: ''},
  { id: 31, src: photo31, alt: '' },
  { id: 32, src: photo32, alt: ''},
  { id: 33, src: photo33, alt: '' },
  { id: 34, src: photo34, alt: '' },
  { id: 35, src: photo35, alt: '' },
  { id: 36, src: photo36, alt: '' },
  { id: 37, src: photo37, alt: '' },
  { id: 38, src: photo38, alt: '' },
  { id: 39, src: photo39, alt: '' },
  { id: 40, src: photo40, alt: '' },
  { id: 41, src: photo41, alt: '' },
  { id: 42, src: photo42, alt: '' },
  { id: 43, src: photo43, alt: '' },
  { id: 44, src: photo44, alt: '' },
  { id: 45, src: photo45, alt: '' },
  { id: 46, src: photo46, alt: '' },
  { id: 47, src: photo47, alt: '' },
  { id: 48, src: photo48, alt: '' },
  { id: 49, src: photo49, alt: '' },
  { id: 50, src: photo50, alt: '' },
  { id: 51, src: photo51, alt: '' },
  { id: 52, src: photo52, alt: '' },
  { id: 53, src: photo53, alt: '' },
  { id: 54, src: photo54, alt: '' },
];

const Gallery = () => {
  const [fullscreenPhoto, setFullscreenPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setFullscreenPhoto(photo);
  };

  const handleCloseFullscreen = () => {
    setFullscreenPhoto(null);
  };

  const handleDownload = (photo) => {
    const link = document.createElement('a');
    link.href = photo.src;
    link.download = photo.alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">GiggaGallery</h1>
      <div className="photo-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-item" onClick={() => handlePhotoClick(photo)}>
            <img src={photo.src} alt={photo.alt} className="photo" />
            <p className="photo-caption">{photo.alt}</p>
          </div>
        ))}
      </div>
      {fullscreenPhoto && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <div className="fullscreen-photo-container" onClick={(e) => e.stopPropagation()}>
            <img src={fullscreenPhoto.src} alt={fullscreenPhoto.alt} className="fullscreen-photo" />
            <button className="download-button" onClick={() => handleDownload(fullscreenPhoto)}>Download</button>
            <button className="close-button" onClick={handleCloseFullscreen}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
