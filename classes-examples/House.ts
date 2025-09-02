class House {
  roomCount: number;
  floorHeight: number;
  floorCount: number;
  heatingType: string;
  wallMaterial: string;
  isElevator: boolean;
  hallwayСount: number;
  buildingType: string;
  address: string;

  constructor() {}

  isLightningAvailable() {
    return true;
  }

  isGasAvailable() {
    return true;
  }

  getWaterPumpStatus() {}

  requestCleaning() {}
}

const house = new House();
