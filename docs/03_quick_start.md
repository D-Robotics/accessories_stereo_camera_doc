---
sidebar_position: 3
---

# 1.3 快速开始

目前支持基于 TogetheROS.Bot（TROS）平台运行 GS130W 相机。

## 软件安装与升级

### 前提条件

- RDK 开发板已安装最新版 RDK OS。
- RDK 开发板能够正常访问互联网。
- RDK 开发板能够远程 SSH。

### 升级到最新版 TROS

升级 tros.b deb 包。

```bash
sudo apt update
sudo apt upgrade
```

### 查看当前 tros.b 版本：

```bash
root@ubuntu:~# apt show tros-humble
Package: tros-humble
Version: 2.2.0-jammy.20240410.221258
Priority: optional
Section: misc
Maintainer: zhuo <zhuo.wang@d-robotics.cc>
Installed-Size: 44.0 kB
Depends: hobot-models-basic, tros-humble-ai-msgs, tros-humble-audio-control, tros-humble-audio-msg, tros-humble-   audio-tracking, tros-humble-base, tros-humble-body-tracking, tros-humble-dnn-benchmark-example, tros-humble-dnn-   node, tros-humble-dnn-node-example, tros-humble-dnn-node-sample, tros-humble-elevation-net, tros-humble-gesture-   control, tros-humble-hand-gesture-detection, tros-humble-hand-lmk-detection, tros-humble-hbm-img-msgs, tros-humb   le-hobot-audio, tros-humble-hobot-chatbot, tros-humble-hobot-codec, tros-humble-hobot-cv, tros-humble-hobot-fall   down-detection, tros-humble-hobot-hdmi, tros-humble-hobot-image-publisher, tros-humble-hobot-llm, tros-humble-ho   bot-mot, tros-humble-hobot-shm, tros-humble-hobot-tts, tros-humble-hobot-usb-cam, tros-humble-hobot-vio, tros-hu   mble-hobot-visualization, tros-humble-img-msgs, tros-humble-imu-sensor, tros-humble-line-follower-model, tros-hu   mble-line-follower-perception, tros-humble-mipi-cam, tros-humble-mono2d-body-detection, tros-humble-mono2d-trash   -detection, tros-humble-mono3d-indoor-detection, tros-humble-parking-perception, tros-humble-parking-search, tro   s-humble-rgbd-sensor, tros-humble-websocket, tros-humble-ros-workspace
Download-Size: 5,546 B
APT-Manual-Installed: yes
APT-Sources: http://archive.d-robotics.cc/ubuntu-rdk jammy/main arm64 Packages
Description: TogetheROS Bot
```

## 运行双目 MIPI 图像采集

### 功能介绍

为了实现环境的立体感知能力，机器人产品中通常会搭载双目摄像头、ToF 等类型的传感器。为降低用户传感器适配和使用成本，TogetheROS.Bot 会对多种常用传感器进行封装，并抽象成 hobot_sensor 模块，支持 ROS 标准图像消息。当配置的传感器参数与接入的摄像头不符时，程序会自动适应正确的传感器类型。

| 类型 | 型号 | 规格 | 支持平台 |
| --- | --- | --- | --- |
| 摄像头 | SC230ai | 200W | RDK X5, RDK X5 Module, RDK S100, RDK S100P |
| 摄像头 | SC132gs | 200W | RDK X5, RDK X5 Module, RDK S100, RDK S100P |

代码仓库：[hobot_mipi_cam](https://github.com/D-Robotics/hobot_mipi_cam.git)

### 使用方式

**1. 通过下述命令启动 hobot_sensor 节点**

```bash
# 配置 tros.b 环境
source /opt/tros/humble/setup.bash
```

```bash
# launch 方式启动
ros2 launch mipi_cam mipi_cam_dual_channel.launch.py mipi_image_width:=1280 mipi_image_height:=1088
```

**2. 如程序输出如下信息，说明节点已成功启动**

```text
[INFO] [launch]: All log files can be found below /root/.ros/log/2024-09-18-19-15-26-160110-ubuntu-3931
[INFO] [launch]: Default logging verbosity is set to INFO
config_file_path is  /opt/tros/humble/lib/mipi_cam/config/
Hobot shm pkg enables zero-copy with fastrtps profiles file: /opt/tros/humble/lib/hobot_shm/config/shm_fastdds.xml
Hobot shm pkg sets RMW_FASTRTPS_USE_QOS_FROM_XML: 1
env of RMW_FASTRTPS_USE_QOS_FROM_XML is  1 , ignore env setting
[INFO] [mipi_cam-1]: process started with pid [3932]
[mipi_cam-1] [WARN] [1726658126.449994704] [mipi_node]: frame_ts_type value: sensor
[mipi_cam-1] [ERROR] [1726658126.455022356] [mipi_factory]: This is't support device type(), start defaule capture.
[mipi_cam-1]
[mipi_cam-1] [WARN] [1726658126.456074125] [mipi_cam]: this board support mipi:
[mipi_cam-1] [WARN] [1726658126.456274529] [mipi_cam]: host 0
[mipi_cam-1] [WARN] [1726658126.456333567] [mipi_cam]: host 2
[mipi_cam-1] [WARN] [1726658128.722451045] [mipi_cam]: [init]->cap default init success.
[mipi_cam-1]
...
```

**3. Web 端查看双目摄像头图像**

由于发布原始数据，需要一个编码 JPEG 图像的节点，一个用 webservice 发布的节点，启动命令如下：

```bash
# 配置 tros.b 环境
source /opt/tros/humble/setup.bash
```

```bash
# launch 方式启动
ros2 launch mipi_cam mipi_cam_dual_channel_websocket.launch.py
```

**4. PC 打开浏览器（chrome/firefox/edge）输入 `http://IP:8000`（IP 为 RDK IP 地址），点击左上方 Web 端展示即可看到双目输出的实时画面。**

![Web 端双目预览](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_web_preview.png)
