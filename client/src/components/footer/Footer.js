import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <section id="footer">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-name">
            <h2 className="thi">Shop</h2>
          </div>
          <div className="footer-top-about">
            <h2>Thông tin</h2>
            <ul>
              <li>
                <a>Về Chúng Tôi</a>
              </li>
              <li>
                <a>Blog</a>
              </li>

              <li>
                <a>Cửa Hàng</a>
              </li>
              <li>
                <a>
                  <img src="https://theme.hstatic.net/1000075078/1000610097/14/gov.png?v=664"></img>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top-sp">
            <h2>Chi tiết</h2>
            <p>Hỗ trợ 1234 5678</p>
            <p>Vận chuyển 1234 5678</p>
          </div>
          <div className="footer-top-delivery">
            <h2>Vận chuyển</h2>
            <ul>
              <li>
                <a>Phương thức vận chuyển</a>
              </li>
              <li>
                <a>Thanh toán</a>
              </li>
              <li>
                <a>Phiếu giảm giá</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <p className="cp">
            <b>Copyright © 2023 Shop Ecommerce</b> <br></br>
            <b>Ctrlman</b>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
