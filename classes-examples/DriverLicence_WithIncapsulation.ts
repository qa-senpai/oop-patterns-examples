// public
// private
// protected
// readonly

class DriverLicInc {
  readonly birthDate: string; // Дата народження власника
  private category: string; // Категорія водійських прав (A, B, C, D і т.д.)
  readonly documentId: string; // Унікальний номер документа
  private firstName: string; // Ім'я власника
  private lastName: string; // Прізвище власника
  private middleName: string; // По батькові власника
  private expirationDate: string; // Дата закінчення дії документа
  private lastUpdated: number; // Timestamp останнього оновлення (в мілісекундах)
  readonly authority: string; // Орган що видав документ
  readonly categoryIssuingDate: string; // Дата отримання певної категорії
  private photo: string | Buffer; // Фото власника (може бути шляхом до файлу або бінарними даними)

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
    this.category = category;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.authority = authority;
    this.photo = photo;

    this.documentId = "APC" + Math.random() * 1_000;

    this.lastUpdated = new Date().getTime();
  }

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

const drLic = new DriverLicInc(
  "11-01-1991",
  "B",
  "Zoya",
  "Вуйко",
  "Любомирівна",
  "МРЕО",
  "C://photo/img.png"
);

drLic.setLastName("ExSafonov", "12512515");

console.log(drLic);
console.log(drLic);
