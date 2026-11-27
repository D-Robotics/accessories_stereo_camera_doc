---
sidebar_position: 1
sidebar_label: Product Overview
title: Product Overview
description: Features, supported platforms, hardware interfaces, and key specifications of the RDK™ Stereo A1P.
---

# Product Overview

RDK™ Stereo A1P is a MIPI-based stereo depth camera featuring dual SC132GS global shutter image sensors and an ICM-42607-C 6-axis IMU. It supports synchronized dual-camera exposure and external triggering. The camera has a 70 mm baseline, 1088×1280 resolution per channel, up to 120 fps output frame rate, high dynamic range (HDR), high signal-to-noise ratio (40 dB), and 850/940 nm near-infrared enhancement, making it suitable for robotics vision, machine vision inspection, and motion pose sensing applications.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_stereo_camera_a1p/zh/a1p_product_overview.png" alt="A1P product overview" width="70%" />

## Compatible Platforms

The following table lists compatibility between this product and RDK developer kit boards:

| Board Name | Support | Notes |
| --- | --- | --- |
| RDK X3 | Not supported | Single MIPI channel only |
| RDK X3 Module | Not supported | - |
| RDK X5 | Supported | - |
| RDK X5 Module | Supported | Requires official carrier board or other carrier board |
| RDK S100/S100P | Supported | Requires Camera expansion board |
| RDK S600 | Supported | - |
| Other development boards with matching MIPI pinout and dual MIPI interfaces | Supported | Driver development required by user |

## Hardware Interfaces

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_stereo_camera_a1p/zh/a1p_hardware_interfaces_v2.jpg" alt="A1P hardware interfaces" width="70%" />

1. **Right MIPI Camera interface:** for right camera and IMU data transmission;
2. **Left MIPI Camera interface:** for left camera data transmission;
3. **IMU INT interface:** for receiving interrupt signals from the IMU or sending interrupt signals to the IMU;

For details, see [Hardware Reference](./04_hardware.md).

## Key Specifications

| Name | Description |
| --- | --- |
| Resolution | 1.3 MP |
| Pixel size | 1088×1280 (portrait) |
| Maximum frame rate | 120 fps |
| Output format | RAW RGB 12/10/8 bit |
| Typical output configuration | 1088×1280@30 fps, 10-bit<br />1088×1280@60 fps, 10-bit |
| Gyroscope noise | 7 mdps/rt-Hz |
| Gyroscope range | ±250 / 500 / 1000 / 2000 dps |
| Accelerometer noise | 100 ug/rt-Hz |
| Accelerometer range | ±2 / 4 / 8 / 16 g |
| Stereo baseline | 70 mm |
| Field of view (FOV) | H: 96.8°<br />V: 115.6°<br />D: 157.2° |
| Video interface | MIPI CSI-2 (2-lane) |
| Maximum transfer rate | 2.4 Gbps |
