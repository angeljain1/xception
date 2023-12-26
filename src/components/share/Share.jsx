import React, { useEffect } from 'react';
import './share.css';

function Share() {
  const shareBtn = document.querySelector('#share_btn');
  var shareBtnShowing = false;

  shareBtn.addEventListener('mouseenter', function (e) {
    shareBtn.classList.add('active');
  });

  shareBtn.addEventListener('mouseleave', function (e) {
    shareBtn.classList.remove('active');
    shareBtnShowing = false;
  });


  // click on share button
  shareBtn.addEventListener('click', function (e) {

    if (!e.target.matches("li *")) {
      // click on ul open show share btns
      if (shareBtnShowing) shareBtn.dispatchEvent(new Event("mouseleave"));
      else {
        shareBtn.dispatchEvent(new Event("mouseenter"));
        shareBtnShowing = true;
      }

      return;
    }

    const shareLink = e.target.dataset.socialLinks,
      params = e.target.dataset.shareParameter,
      shareUrl = new URL(window.location.pathname, window.location.origin);

    if (shareLink == undefined) {
      navigator.share({
        url: shareUrl.toString()
      });
      return;
    }

    const shareLinkObj = new URL(shareLink, window.location.origin);

    shareLinkObj.searchParams.set(params, shareUrl.toString());

    window.open(shareLinkObj.toString());
  });
  return (
    <ul id="share_btn">
      <li className="facebook">
        <a href="#" data-social-links="https://www.facebook.com/sharer/sharer.php" data-share-parameter="u">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </li>

      <li className="twitter">
        <a href="#" data-social-links="https://twitter.com/intent/tweet" data-share-parameter="url">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </li>

      <li className="whatsapp">
        <a href="#" data-social-links="https://wa.me" data-share-parameter="text">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </li>

      <li className="other-socials">
        <a href="#" >
          <i className="fa-solid fa-share"></i>
        </a>
      </li>
    </ul>
  );
}


export default Share;