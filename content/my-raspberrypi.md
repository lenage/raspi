Title: Raspberry Pi硬件参数
Date: 2013-4-6 18:56
Tags: hardware
Category: review
Slug: raspberry-hareware-info
Author: Yuan He
Summary: 新入手Raspberry Pi，爆一下硬件配置

2012-11-15(Thu) 入手的，之前安装好[XBMC](http://xbmc.org/)之后用的挺好的, 但是后来超频导致不能启动，于是又搁置了一段时间,
现在重新折腾起。:)

### 接口示意图:
![Get started](http://www.raspberrypi.org/wp-content/uploads/2012/04/Screen-Shot-2012-12-24-at-10.59.55-1024x722.png)
[还有比较完整的Getting start PDF文档](http://www.raspberrypi.org/wp-content/uploads/2012/12/quick-start-guide-v1.1.pdf)

### 硬件参数
PS: 现在能买到的大多数都是`Model B`, 区分起来也非常简单，**Model B**有网线接口，**Model A**没有网线接口，**Model B**有两个USB接口，**Model A**只有一个。

|                                               | Model A                                                                                                                                          | Model B                                                  |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| Target price:                                 | US$25 Ext tax (GBP £16 Exc VAT)                                                                                                                  | US$35 Ext tax (GBP £22 Exc VAT)                          |
| System-on-a-chip (SoC)                        | Broadcom BCM2835 (CPU + GPU. SDRAM is a separate chip stacked on top                                                                             |                                                          |
| CPU                                           | 700 MHz ARM11 ARM1176JZF-S core                                                                                                                  |                                                          |
| GPU                                           | Broadcom VideoCore IV,OpenGL ES 2.0,OpenVG 1080p30 H.264 high-profile encode/decode                                                              |                                                          |
| Memory (SDRAM)iB                              | 256 MiB (planned with 128 MiB, upgraded to 256 MiB on 29 Feb 2012)                                                                               | 256 MiB (until 15 Oct 2012); 512 MiB (since 15 Oct 2012) |
| USB 2.0 ports:                                | 1 (provided by the BCM2835)                                                                                                                      | 2 (via integrated USB hub)                               |
| Video outputs                                 | Composite video / Composite RCA, HDMI (not at the same time)                                                                                     |                                                          |
| Audio outputs                                 | TRS connector / 3.5 mm jack, HDMI                                                                                                                |                                                          |
| Audio inputs                                  | none, but a USB mic or sound-card could be added                                                                                                 |                                                          |
| Onboard Storage                               | Secure Digital/ SD / MMC / SDIO card slot                                                                                                        |                                                          |
| Onboard Network                               | NONE                                                                                                                                             | 10/100 wired Ethernet RJ45                               |
| Low-level peripherals                         | General Purpose Input/Output (GPIO) pins, Serial Peripheral Interface Bus (SPI), I²C, I²S[2], Universal asynchronous receiver/transmitter (UART) |                                                          |
| Real-time clock                               | NONE                                                                                                                                             |                                                          |
| Power ratings (provisional, from alpha board) | 500 mA, (2.5 W)                                                                                                                                  | 700 mA, (3.5 W)                                          |
| Power source                                  | 5 V (DC) via Micro USB type B or GPIO header                                                                                                     |                                                          |
| Size                                          | 85.0 x 56.0 mm (two different boards, measured with callipers)                                                                                   |                                                          |
更加详细内容请参见[wiki](http://elinux.org/RPi_Hardware)

晒一下我的π:
![Raspberry pi](https://s3.amazonaws.com/pi.lenage.me/pi.jpg)
PS:图中的排线需要自己购买，淘宝上大概￥8左右。
(完)

Last updated: Sun Apr  7 23:09:08 2013
