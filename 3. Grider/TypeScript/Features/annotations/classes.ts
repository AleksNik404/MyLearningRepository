class Vehicle1 {
  color: string = 'red';

  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle1 {
  drive(): void {
    console.log('vrooom');
  }
}

const vehicle = new Vehicle1();

vehicle.drive();
