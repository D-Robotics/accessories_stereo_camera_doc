---
sidebar_position: 1
---

# 1.1 产品简介

RDK™ Stereo Camera GS130W 是一款基于 MIPI 接口的双目深度相机，搭载双颗 SC132GS 全局快门传感器，支持双目同步曝光与外部触发。相机基线 80mm，单路分辨率 1280×1080，最高输出帧率 120fps，具备高动态范围（HDR）、高信噪比（40dB）及 850/940nm 近红外增强能力，适用于机器人视觉、机器视觉检测和实时运动监测等应用场景。

![GS130W 产品示意图](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_product_overview.png)


## 适用板卡

下表列举了本产品与 RDK 开发者套件板卡产品的兼容性情况：

| 板卡名称 | 支持情况 | 说明 |
| --- | --- | --- |
| RDK X3 | 不支持 | 仅支持单路 MIPI |
| RDK X3 Module | 不支持 | - |
| RDK X5 | 支持 | - |
| RDK X5 Module | 支持 | 需安装官方载板或其他载板 |
| RDK S100/S100P | 支持 | 需安装 Camera 拓展板 |
| RDK S600 | 支持 | - |
| 其他 MIPI 线序相符、具有双 MIPI 接口的开发板产品 | 支持 | 需用户自行开发驱动 |

## 硬件接口

![GS130W 硬件接口](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_hardware_interfaces.png)

1. 右目 MIPI Camera 接口：用于右目相机数据传输；
2. 左目 MIPI Camera 接口：用于左目相机数据传输；

详细说明见 [硬件说明](./04_hardware.md)。

## 关键参数

| 名称 | 描述 |
| --- | --- |
| 分辨率 | 130 万 |
| 像素大小 | 1280×1080 |
| 最大帧率 | 120 fps |
| 输出格式 | RAW RGB 12/10/8 bit |
| 典型输出配置 | 1280×1080@30fps，10-bit<br/>1280×1080@60fps，10-bit |
| 双目基线长度 | 80mm |
| 视场角（FOV） | H：115.6°<br/>V：96.8°<br/>D：157.2° |
| 视频传输接口 | MIPI CSI-2（2-lane） |
| 最大传输速率 | 2.4 Gbps |
