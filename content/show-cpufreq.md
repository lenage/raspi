Title: Raspberry显示当前CPU频率
Date: 2013-4-22 10:56:26
Tags: vcgencmd
Category: tips
Slug: raspberry-show_freq_after_overlocking
Author: Yuan He
Summary: 超频之后显示当前CPU频率

Raspberry Pi ArchLinux的vcgencmd安装在`/opt/vc/bin/`下面，需要自己把`/opt/vc/bin` 加到PATH里面：

    export PATH=/opt/vc/bin:$PATH

或者直接这样用：

    /opt/vc/bin/vcgencmd get_config arm_freq
    # 列出所有命令
    /opt/vc/bin/vcgencmd commands
    # vcgencmd 版本
    /opt/vc/bin/vcgencmd version

[vcgencmd wiki](http://elinux.org/RPI_vcgencmd_usage)
