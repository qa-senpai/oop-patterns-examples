abstract class Documents {
  readonly birthDate: string;
  readonly documentId: string;
  public firstName: string;
  public lastName: string;
  public middleName: string;
  public lastUpdated: number;

  constructor(
    birthDate: string,
    category: string,
    firstName: string,
    lastName: string,
    middleName: string,
    authority: string,
    photo: string
  ) {
    this.birthDate = birthDate;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.documentId = "APC" + Math.random() * 1_000;
    this.lastUpdated = new Date().getTime();
  }
}

class DriverLicense extends Documents {
  private category: string; // Категорія водійських прав (A, B, C, D і т.д.)
  private expirationDate: string; // Дата закінчення дії документа
  readonly authority: string; // Орган що видав документ
  readonly categoryIssuingDate: string; // Дата отримання певної категорії
  private photo: string | Buffer; // Фото власника (може бути шляхом до файлу або бінарними даними)

  setLastName(lastName: string, authToken: string) {
    if (authToken === "12512515") {
      this.lastName = lastName;
    } else {
      throw Error(`you are not authorize `);
    }
  }

  get getLastName() {
    return this.lastName;
  }

  private copyDocumentId(): string {
    return this.documentId;
  }

  public showFullInformation() {
    return this.lastUpdated;
  }

  protected translate(): void {
    console.log("Translating...");
  }

  replaceDocument(): void {
    console.log("Creating replace request...");
  }
}

// IS-A Є ЧИМОСЬ
class Passport extends Documents {}

// ???
class Certificate extends Documents {}

class Cudos extends Documents {}

abstract class Mamal {}

abstract class Animal extends Mamal {
  makeSound() {}
  walk() {}
  sleep() {}
}

class Human extends Mamal {}

const driverLicense1 = new DriverLicense(
  "11-01-1991",
  "B",
  "Zoya",
  "Вуйко",
  "Любомирівна",
  "МРЕО",
  "C://photo/img.png"
);
