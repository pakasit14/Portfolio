import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fphs3-1.fna.fbcdn.net/v/t39.30808-1/415497961_2138187939906947_1640209809264476401_n.jpg?stp=dst-jpg_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwYUQhUHpP4-ho4FS9gbxnfN5cmuaoG4d83lya5qgbh3D4SZJjtvETFOI634DivJzLg8GLLJ-Pg6MJ5NkEc-TQ&_nc_ohc=GeOcrWzErDAAX-Xnf18&_nc_ht=scontent.fphs3-1.fna&oh=00_AfCKBMAyP-7BIZgkwyMsZfPQskAgwXoqZFR4umPx4EJk8w&oe=65EF3F3A"
            alt=""
          />
          <h4>FILN</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fphs3-1.fna.fbcdn.net/v/t39.30808-6/244302789_921042432180875_4630214419355654185_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFoCk69JbYRqREpGvjFq0MDoG5O_98cHWegbk7_3xwdZ7oVDscKDtFpVqSfT1oA3RBAwfY4Gd796SGFjSJ14tuL&_nc_ohc=ByW2L-LyVSUAX_Ji0DK&_nc_ht=scontent.fphs3-1.fna&oh=00_AfC4AsdavUQ_kfRfkBrzFu8kNBSO2m-pJPoIweJQQbUGcQ&oe=65EFC1FF"
            alt=""
          />
          <h4>NAM</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fphs3-1.fna.fbcdn.net/v/t39.30808-1/416919909_1095540431466429_7645458056124441810_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFZVMBXb1H7ovI4iTfb_FSAVZHjjRJlHGlVkeONEmUcacN613w35SOSZ2pUs0h8AbxN1EoTQNxlYRBu186UW9Gw&_nc_ohc=0pravI-zU3QAX_vCfQH&_nc_ht=scontent.fphs3-1.fna&oh=00_AfBhLziPFuaBKCL8THiXMOCo7uq8BHHopuMrLKuuXy_4rg&oe=65F0D92A"
            alt=""
          />
          <h4>BAS</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;