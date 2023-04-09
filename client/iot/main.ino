#include <M5Stack.h>
#include <unit.h>

M5Title title0(title="Safe Sphere | Environment Info", x=3, fgcolor=0x422222, bgcolor=0x2fc51f);
M5TextBox labelTemp(13, 41, "Temperature", &lcd, 0xFFFFFF, 0, 0);
M5TextBox labelPre(13, 85, "Pressure", &lcd, 0xFFFFFF, 0, 0);
M5TextBox labelHum(13, 132, "Humidity", &lcd, 0xFFFFFF, 0, 0);
M5TextBox label3(198, 41, "0", &lcd, 0xFFFFFF, 0, 0);
M5TextBox label4(198, 85, "0", &lcd, 0xFFFFFF, 0, 0);
M5TextBox label5(198, 132, "0", &lcd, 0xFFFFFF, 0, 0);

M5Title title1(title="Safe Sphere | Home Security System", x=3, fgcolor=0xFFFFFF, bgcolor=0x0000FF);
M5TextBox label0(19, 108, "label0", &lcd, 0xFFFFFF, 0, 0);

unit::ENV3 env3_0(unit::PORTA);
unit::PIR pir_0(unit::PORTB);

bool armed = true;

void buttonA_wasPressed() {
  RGB.setColorAll(0x000000);
  label0.setText("RGB bar are turned off");
  delay(2000);
}

void buttonB_wasPressed() {
  armed = true;
}

void buttonC_wasPressed() {
  armed = false;
}

void setup() {
  M5.begin();
  M5.Power.begin();
  M5.Lcd.fillScreen(0x222222);
  M5.Lcd.setRotation(0);
  env3_0.begin();
  pir_0.begin();
  M5.BtnA.attachClick(buttonA_wasPressed);
  M5.BtnB.attachClick(buttonB_wasPressed);
  M5.BtnC.attachClick(buttonC_wasPressed);
  label0.setFont(&lcd);
}

void loop() {
  if (armed) {
    label0.setText("Alarm is Armed");
    if (pir_0.state()) {
      RGB.setColorAll(0xff0000);
      Speaker.setVolume(1);
      Speaker.tone(1800, 200);
    }
  } else {
    label0.setText("Alarm is Disarmed");
    RGB.setColorAll(0x000000);
  }
  delay(2);
}
