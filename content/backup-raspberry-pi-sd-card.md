Title: 备份Raspberry Pi SD Card
Date: 2013-6-3 18:56
Tags: backup
Category: tech
Slug: backup-raspberry-pi-sd-card
Author: Yuan He
Summary: 备份Raspberry Pi SD Card

1. $ `cd ~/raspberry-pi/backups`
2. $ `df -h` 查看SD卡，比如:`/dev/disk2s1`
3. $ `diskutil unmount /dev/disk2s1`
4. $ `dd if=/dev/rdisk2 of=~/raspberry-pi/backups/raspi-todaysdate-backup.img bs=1m`, 这里`disk2s1`要换成`rdisk2`
5. 等执行完之后,`diskutil eject /dev/rdisk1`
6. 压缩 `tar cjvf ~/raspberry-pi/backups/raspi-todaysdate-backup.img.bz2 ~/raspberry-pi/backups/raspi-todaysdate-backup.img`
7. DONE
