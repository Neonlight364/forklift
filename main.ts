radio.onReceivedNumber(function (receivedNumber) {
    Action = receivedNumber
})
function Forklift_arm_down () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function Forklift_arm_up () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function REV () {
    wuKong.setAllMotor(-100, -100)
}
function foward () {
    wuKong.setAllMotor(100, 100)
}
let Action = 0
joystickbit.initJoystickBit()
radio.setGroup(7)
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
basic.forever(function () {
	
})
