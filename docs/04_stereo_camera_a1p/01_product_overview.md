---
sidebar_position: 1
sidebar_label: 产品简介
title: 产品简介
description: RDK™ Stereo A1P 的产品特性、适用平台、硬件接口与关键参数。
---

# 产品简介

RDK™ Stereo A1P 是一款基于 MIPI 接口的双目深度相机，搭载双颗 SC132GS 全局快门图像传感器与 ICM-42607-C 六轴 IMU，支持双目同步曝光及外部触发。相机基线 70 mm，单路分辨率 1088×1280，最高输出帧率 120 fps，具备高动态范围（HDR）、高信噪比（40 dB）与 850/940 nm 近红外增强能力，适用于机器人视觉、机器视觉检测及运动姿态感知等应用场景。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_stereo_camera_a1p/zh/a1p_product_overview.png" alt="A1P 产品示意图" width="70%" />

## 适用平台

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

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_stereo_camera_a1p/zh/a1p_hardware_interfaces_v2.jpg" alt="A1P 硬件接口" width="70%" />

1. **右目 MIPI Camera 接口**：用于右目相机和 IMU 的数据传输；
2. **左目 MIPI Camera 接口**：用于左目相机数据传输；
3. **IMU INT 接口**：用于接收 IMU 发出的中断信号或向 IMU 发送中断信号；

详细说明见 [硬件说明](./04_hardware.md)。

## 关键参数

| 名称 | 描述 |
| --- | --- |
| 分辨率 | 130 万 |
| 像素大小 | 1088×1280（竖屏） |
| 最大帧率 | 120 fps |
| 输出格式 | RAW RGB 12/10/8 bit |
| 典型输出配置 | 1088×1280@30 fps，10-bit<br />1088×1280@60 fps，10-bit |
| 陀螺仪噪声 | 7 mdps/rt-Hz |
| 陀螺仪量程 | ±250 / 500 / 1000 / 2000 dps |
| 加速度计噪声 | 100 ug/rt-Hz |
| 加速度计量程 | ±2 / 4 / 8 / 16 g |
| 双目基线长度 | 70 mm |
| 视场角（FOV） | H：96.8°<br />V：115.6°<br />D：157.2° |
| 视频传输接口 | MIPI CSI-2（2-lane） |
| 最大传输速率 | 2.4 Gbps |
