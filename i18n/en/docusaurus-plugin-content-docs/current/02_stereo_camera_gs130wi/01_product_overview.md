---
sidebar_position: 1
title: "Product Overview"
---

# Product Overview

RDK™ Stereo Camera GS130WI is a MIPI-based stereo depth camera featuring dual SC132GS global shutter image sensors and an ICM-42688-P 6-axis IMU. It supports synchronized dual-camera exposure and external triggering. The camera has a 70 mm baseline, 1080×1280 resolution per channel, up to 120 fps output frame rate, high dynamic range (HDR), high signal-to-noise ratio (40 dB), and 850/940 nm near-infrared enhancement, making it suitable for robotics vision, machine vision inspection, and motion pose sensing applications.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_product_overview.png" alt="GS130WI product overview" width="70%" />

## Compatible Boards

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

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_hardware_interfaces.png" alt="GS130WI hardware interfaces" width="70%" />

1. Right MIPI Camera interface: for right camera and IMU data transmission;
2. Left MIPI Camera interface: for left camera data transmission;
3. External interrupt interface: for receiving interrupt signals from the IMU or sending interrupt signals to the IMU;
4. IMU interrupt selection switch: for switching the interrupt connection of the IMU INT2 pin.

For details, see [Hardware Reference](./04_hardware.md).

## Key Specifications

| Name | Description |
| --- | --- |
| Resolution | 1.3 MP |
| Pixel size | 1080×1280 |
| Maximum frame rate | 120 fps |
| Output format | RAW RGB 12/10/8 bit |
| Typical output configuration | 1280×1080@30fps, 10-bit<br/>1280×1080@60fps, 10-bit |
| Gyroscope noise | 2.8 mdps/rt-Hz |
| Gyroscope range | ± 15.625 / 31.25 / 62.5 / 125 / 250 / 500 / 1000 / 2000 dps |
| Accelerometer noise | 70 ug/rt-Hz |
| Accelerometer range | ± 2 / 4 / 8 / 16 g |
| Stereo baseline | 70mm |
| Field of view (FOV) | H: 96.8°<br/>V: 115.6°<br/>D: 157.2° |
| Video interface | MIPI CSI-2 (2-lane) |
| Maximum transfer rate | 2.4 Gbps |
