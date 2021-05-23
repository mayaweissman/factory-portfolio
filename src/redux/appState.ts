import { CampaignModel } from "../models/campaignModel";
import { ClientModel } from "../models/clientModel";
import { ProductModel } from "../models/productModel";
import { ReportModel } from "../models/reportModel";
import { UserModel } from "../models/userModel";

export class AppState {
  public allItems: [] = [];

  public constructor() {
    const json = sessionStorage.getItem("AppState");
    if (json) {
      const appState: AppState = JSON.parse(json);
      this.allItems = appState.allItems;
    }
  }
}
