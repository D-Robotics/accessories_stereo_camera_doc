---
sidebar_position: 4
---

# 硬件说明

## 结构安装说明

GS130WI 模组的两端各有一个安装孔，尺寸信息如下图（Unit: mm），详细的 3D 模型文件见 [资料下载](./06_downloads.md)。通过该安装孔，可以使用两颗 M2.5 螺栓将 GS130WI 模组固定到其他结构上。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_structure_dimensions.png" alt="GS130WI 结构尺寸" width="80%" />

:::tip 说明

安装时，建议在安装沉孔位置放置垫圈，并交替锁紧螺栓，避免 GS130WI 的金属外壳发生微小形变，导致传感器位置外参发生变化。

:::

## 硬件接口说明

### 硬件拓扑

下图示意 GS130WI 模组与 RDK 开发板硬件拓扑关系。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_hardware_topology.png" alt="GS130WI 硬件拓扑" width="80%" />

### 连接器型号

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connector_models.png" alt="GS130WI 连接器型号" width="70%" />

| 连接器 | 连接器型号 | 连接器厂商 |
| --- | --- | --- |
| 1 | AFC24-S22FIA-00 | 钜硕电子 |
| 2 | AFC24-S22FIA-00 | 钜硕电子 |
| 3 | 5063-3AWB | 文章济美 |

### 接口描述

#### ① 右目 MIPI Camera 接口

该接口用于右目相机和 IMU 的数据传输。

连接器 PIN1 位置如下图所示：

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_right_mipi_pin1.png" alt="右目 MIPI PIN1 位置" width="50%" />

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
| 18 | FSYNC | 连接 Camera Sensor 的 TRIGL/FSYNC 引脚，用于对 Slave 模式下的 Sensor 使能曝光<br/>若 IMU 中断选择开关选择 LPWM：连接 IMU 的 INT2 引脚，用于向 IMU 输入 Fsync 上升/下降沿信号 |
| 19 | GND | |
| 20 | SCL | 连接 Camera Sensor 的 SCL 引脚，用于对 Sensor 进行设置<br/>连接 IMU 的 SCL 引脚，用于对 IMU 进行设置和读取 IMU 数据 |
| 21 | SDA | 连接 Camera Sensor 的 SDA 引脚，用于对 Sensor 进行设置<br/>连接 IMU 的 SDA 引脚，用于对 IMU 进行设置和读取 IMU 数据 |
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

#### ③ 外部中断接口

该接口用于接收 IMU 发出的中断信号或向 IMU 发送中断信号。

连接器 PIN1 位置如下图所示：

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_ext_int_pin1.png" alt="外部中断接口 PIN1 位置" width="50%" />

连接器线序如下表所示：

| PIN | Name | Description |
| --- | --- | --- |
| 1 | INT1 | 连接 IMU 的 INT1 引脚，用于将该引脚功能引出 |
| 2 | INT2 | 若 IMU 中断选择开关选择 LPWM：N/A<br/>若 IMU 中断选择开关选择 EXT：连接 IMU 的 INT2 引脚，用于将该引脚功能引出 |
| 3 | GND | |

#### ④ IMU 中断选择开关

该开关用于切换 IMU INT2 引脚（PIN9）的中断连接。

- 当开关选择 LPWM 时：IMU 的 INT2 引脚连接至右目相机的 TRIGL/FSYNC 引脚，外部中断接口的 PIN2 悬空。
- 当开关选择 EXT 时：IMU 的 INT2 引脚连接外部中断接口的 PIN2。
