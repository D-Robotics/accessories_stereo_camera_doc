---
sidebar_position: 0
slug: /overview
---

# RDK 双目摄像头手册

本文档面向 D-Robotics RDK 开发者套件配套的双目摄像头模组，提供选型、安装、点亮与二次开发指引。

## 文档结构

每款双目相机文档采用统一章节结构，便于按使用阶段查阅：

| 章节 | 说明 |
| --- | --- |
| 产品简介 | 产品特性、适用板卡、硬件接口与关键参数 |
| 安装连接 | 物品清单、接线/安装步骤与注意事项 |
| 快速开始 | SDK 或系统工具获取、示例运行与验证方法 |
| 硬件说明 | 结构尺寸、接口定义、拓扑与引脚说明 |
| 软件说明 | API 说明、驱动/SDK 使用与二次开发指引 |
| 资料下载 | 规格书、Datasheet、3D 图纸等参考资料 |

## 产品文档状态

下表列出当前双目相机文档收录情况。**可用**表示已提供完整在线手册，可点击产品名称进入对应章节。

| 产品名称 | 适用平台 | 手册状态 |
| --- | --- | --- |
| [RDK Stereo Camera GS130W](./01_stereo_camera_gs130w/01_product_overview.md) | RDK X5、RDK X5 Module、RDK S100、RDK S100P、RDK S600 | <span className="doc-status-badge doc-status-badge--available">可用</span> |
| [RDK Stereo Camera GS130WI](./02_stereo_camera_gs130wi/01_product_overview.md) | RDK X5、RDK X5 Module、RDK S100、RDK S100P、RDK S600 | <span className="doc-status-badge doc-status-badge--available">可用</span> |

## 产品简介

**RDK Stereo Camera GS130W** 是基于 MIPI 的双目深度相机，搭载双颗 SC132GS 全局快门传感器，基线 80 mm，单路分辨率 1280×1080，最高 120 fps，适用于机器人视觉与机器视觉检测等场景。

**RDK Stereo Camera GS130WI** 在 GS130W 基础上集成 ICM-42688-P 六轴 IMU，基线 70 mm，单路分辨率 1080×1280，同样支持 HDR、高信噪比与近红外增强，适用于需要同步视觉与姿态感知的应用。
