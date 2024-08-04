input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
    DISTANCE = maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    DIRECTION = randint(0, 10)
    if (DISTANCE < 30 && DISTANCE != 0) {
        if (DIRECTION == 1) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
            basic.pause(1000)
        } else {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 0)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
            basic.pause(1000)
        }
    } else {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    basic.pause(1000)
})
let DIRECTION = 0
let DISTANCE = 0
led.enable(false)
voiceRecognition.init()
maqueenPlusV2.I2CInit()
OLED12864_I2C.init(60)
voiceRecognition.setVolume(7)
voiceRecognition.setMuteMode(voiceRecognition.MUTE.OFF)
voiceRecognition.setWakeTime(60)
serial.writeLine("" + (voiceRecognition.getWakeTime()))
voiceRecognition.playByCMDID(voiceRecognition.checkWord1(voiceRecognition.WakeupWords.W2))
serial.writeLine("==================")
OLED12864_I2C.showString(
0,
0,
"Hello ROBOT!",
1
)
basic.pause(2000)
OLED12864_I2C.clear()
basic.forever(function () {
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W5)) {
            OLED12864_I2C.showNumber(
            0,
            0,
            voiceRecognition.readCMDID(),
            1
            )
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
            basic.pause(1000)
            maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W6)) {
            OLED12864_I2C.showNumber(
            0,
            0,
            voiceRecognition.readCMDID(),
            1
            )
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
            basic.pause(1000)
            maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W7)) {
            OLED12864_I2C.showNumber(
            0,
            0,
            voiceRecognition.readCMDID(),
            1
            )
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
            basic.pause(1000)
            maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W8)) {
            OLED12864_I2C.showNumber(
            0,
            0,
            voiceRecognition.readCMDID(),
            1
            )
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
            basic.pause(1000)
            maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W9)) {
            OLED12864_I2C.showNumber(
            0,
            0,
            voiceRecognition.readCMDID(),
            1
            )
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W10)) {
            OLED12864_I2C.showNumber(
            0,
            0,
            voiceRecognition.readCMDID(),
            1
            )
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Open)
            maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Blue)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W11)) {
            OLED12864_I2C.showNumber(
            0,
            0,
            voiceRecognition.readCMDID(),
            1
            )
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Close)
            maqueenPlusV2.ledBlank()
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W141)) {
            OLED12864_I2C.showNumber(
            0,
            0,
            voiceRecognition.readCMDID(),
            1
            )
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pins.servoWritePin(AnalogPin.P1, 40)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W142)) {
            OLED12864_I2C.showNumber(
            0,
            0,
            voiceRecognition.readCMDID(),
            1
            )
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            pins.servoWritePin(AnalogPin.P1, 90)
        }
    }
})
