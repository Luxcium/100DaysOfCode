# seventeenth-day

Working on making my Canon DSLR camera work as a web cam as per [How to use your DSLR Camera as a Webcam In Linux](https://medium.com/nerdery/dslr-webcam-setup-for-linux-9b6d1b79ae22) ― by [Ben Chapman
](https://medium.com/@thisisben)


    SRC_FOLDER="${HOME}/src";
    (cd ${SRC_FOLDER} && git clone https://github.com/umlaeute/v4l2loopback.git);
    alias mkloopback="(cd ${SRC_FOLDER}/v4l2loopback && make clean && git pull origin && sudo make && sudo make install && sudo depmod -a -v && sudo modprobe -v v4l2loopback exclusive_caps=1 max_buffers=2 && cd /sys/devices/virtual/video4linux/) || echo ERROR";
    mkloopback;
