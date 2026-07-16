---
sidebar_position: 4
---

# 1.4 硬件说明

## 结构安装说明

GS130W 模组的两端各有 2 个安装孔，尺寸信息如下图（Unit: mm），详细的 3D 模型文件见 [资料下载](./06_downloads.md)。通过该安装孔，可以使用 4 颗 M3 螺栓将 GS130W 模组固定到其他结构上。

![GS130W 结构尺寸](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_structure_dimensions.png)

:::tip 说明

安装时，建议在安装孔位置放置垫圈，并交替锁紧螺栓，避免 GS130W 模组的金属支架发生微小形变，导致传感器位置外参发生变化。

:::

## 硬件接口说明

### 硬件拓扑

下图示意 GS130W 模组与 RDK 开发板硬件拓扑关系。

![GS130W 硬件拓扑](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_hardware_topology.png)

### 连接器型号

![GS130W 连接器型号](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connector_models.png)


| 连接器 | 连接器型号 | 连接器厂商 |
| --- | --- | --- |
| 1 | AFC24-S22FIA-00 | 钜硕电子 |
| 2 | AFC24-S22FIA-00 | 钜硕电子 |

### 接口描述

#### ① 右目 MIPI Camera 接口

该接口用于右目相机和 IMU 的数据传输。

连接器 PIN1 位置如下图所示：

![右目 MIPI PIN1 位置](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_right_mipi_pin1.png)

连接器线序如下表所示：

| PIN | Name | Description |
| --- | --- | --- |
| 1 | GND | |
| 2 | MDN0 | MIPI Data Negative 0，用于传输视频流 |
| 3 | MDP0 | MIPI Data Positive 0，用于传输视频流 |
| 4 | GND | |
| 5 | MDN1 | MIPI Data Negative 1，用于传输视频流 |
| 6 | MDP1 | MIPI Data Positive 1，用于传输视频流 |
| 7 | GND | |
| 8 | MCN | MIPI Clock Negative，用于传输视频流 |
| 9 | MCP | MIPI Clock Positive，用于传输视频流 |
| 10 | GND | |
| 11 | N/A | |
| 12 | N/A | |
| 13 | GND | |
| 14 | N/A | |
| 15 | N/A | |
| 16 | GND | |
| 17 | RESET | 连接 Camera Sensor 的 XSHUTDN 引脚，用于对 Sensor Chip 进行硬件复位 |
| 18 | FSYNC | 连接 Camera Sensor 的 TRIGL/FSYNC 引脚，用于对 Slave 模式下的 Sensor 使能曝光 |
| 19 | GND | |
| 20 | SCL | 连接 Camera Sensor 的 SCL 引脚，用于对 Sensor 进行设置 |
| 21 | SDA | 连接 Camera Sensor 的 SDA 引脚，用于对 Sensor 进行设置 |
| 22 | 3V3 | |

#### ② 左目 MIPI Camera 接口

该接口用于左目相机的数据传输。

连接器 PIN1 位置与右目 MIPI Camera 接口相同。

连接器线序如下表所示：

| PIN | Name | Description |
| --- | --- | --- |
| 1 | GND | |
| 2 | MDN0 | MIPI Data Negative 0，用于传输视频流 |
| 3 | MDP0 | MIPI Data Positive 0，用于传输视频流 |
| 4 | GND | |
| 5 | MDN1 | MIPI Data Negative 1，用于传输视频流 |
| 6 | MDP1 | MIPI Data Positive 1，用于传输视频流 |
| 7 | GND | |
| 8 | MCN | MIPI Clock Negative，用于传输视频流 |
| 9 | MCP | MIPI Clock Positive，用于传输视频流 |
| 10 | GND | |
| 11 | N/A | |
| 12 | N/A | |
| 13 | GND | |
| 14 | N/A | |
| 15 | N/A | |
| 16 | GND | |
| 17 | RESET | 连接 Camera Sensor 的 XSHUTDN 引脚，用于对 Sensor Chip 进行硬件复位 |
| 18 | FSYNC | 连接 Camera Sensor 的 TRIGL/FSYNC 引脚，用于对 Slave 模式下的 Sensor 使能曝光 |
| 19 | GND | |
| 20 | SCL | 连接 Camera Sensor 的 SCL 引脚，用于对 Sensor 进行设置 |
| 21 | SDA | 连接 Camera Sensor 的 SDA 引脚，用于对 Sensor 进行设置 |
| 22 | 3V3 | |
