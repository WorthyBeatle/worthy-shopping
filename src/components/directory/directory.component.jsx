import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl:
            "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_12/1976292/230320-sun-protection-hats-aw-2x1.jpg",
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: "Jackets",
          imageUrl:
            "https://im.whatshot.in/img/2020/Dec/istock-914014584-cropped-1-1606997198.jpg",
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: "Sneakers",
          imageUrl:
            "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_02/3528875/220110-waterproof-sneakers-vl-2x1.jpg",
          id: 3,
          linkUrl: ''
        },
        {
          title: "Men",
          imageUrl:
            "https://img.freepik.com/free-photo/happy-man-with-handbags-dancing-after-shopping-spree_482257-18132.jpg",
          id: 4,
          linkUrl: ''
        },
        {
          title: "Women",
          imageUrl:
            "https://media.istockphoto.com/id/1169378197/photo/stylish-shopaholic-with-purchases.jpg?s=612x612&w=0&k=20&c=RGwdnF0wrWV8NNBawXAbzAHUe8sMBpLsEvIICLR9dM4=",
          id: 5,
          linkUrl: ''
        },
        {
          title: "Sports",
          imageUrl: "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11617253510926.jpg",
          id: 6,
          linkUrl: ''
        },
        {
          title: "Pants",
          imageUrl: "https://s3.amazonaws.com/proper-media/merch/42fba00125891700219461209c817be8.jpg",
          size: "large",
          id: 7,
          linkUrl: ''
        },
        {
          title: "Kids",
          imageUrl: "https://t3.ftcdn.net/jpg/00/95/89/34/360_F_95893436_au1LFgcXfWRbX1pOAlaVLouWUUhcjAMA.jpg",
          size: "large",
          id: 8,
          linkUrl: ''
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
