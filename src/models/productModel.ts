import { PageModel } from "./pageModel";

export class ProductModel {
  public constructor(
    public productId?: number,
    public displayImgSrc?: string,
    public displayVideoSrc?: string,
    public productTypeId?: number,
    public insidePage?: {
      section1?: {
        imgSrc?: string,
        videoSrc?: string
      },
      section2?: {
        bgColor?: string,
        imagesSize?: number,
        images: {
          img1?: string,
          img2?: string,
          img3?: string,
          img4?: string,
          img5?: string,
          img6?: string,
          img7?: string,
          img8?: string,
        }
      }
      section3?: {
        bgColor?: string,
        imagesSize?: number,
        images: {
          img1?: string,
          img2?: string,
          img3?: string,
          img4?: string,
          img5?: string,
          img6?: string,
          img7?: string,
          img8?: string,
        }
      },
      section4?: {
        bgColor?: string,
        bgImgSrc?: string,
        imgSrc?: string,
        videoSrc?: string,
        display?: string
      }
    }
  ) { }
}
