---
sidebar_position: 2
title: "Installation Guide"
---

# Installation Guide

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocScope from '@site/src/components/DocScope';
```

## Bill of Materials

The following items are required to install the module:


| Item Name | Item Image |
| --- | --- |
| GS130WI module | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_module.png" alt="GS130WI module" /> |
| Development board (supported board from compatible boards list) | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_supported_board.png" alt="Development board" /> |
| FFC/FPC cables x2 (22-pin, 0.5 mm pitch, same-side contacts) | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_ffc_cable.png" alt="FFC/FPC cable" /> |
| 3-pin cable (1.25 mm slim connector - Dupont wires) | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_3pin_cable.png" alt="3-pin cable" /> |


## Installation and Connection


### Connect FFC/FPC Cables to the GS130WI Module


:::warning Caution
- When connecting FFC/FPC cables, always power off the development board to prevent device damage from arcing or misaligned contacts.
- FFC/FPC cables are flexible; do not pull them forcefully.
- The back of the GS130WI module has exposed PCB; avoid metal objects falling onto it during installation and use to prevent short circuits.
:::

1. Open the MIPI Camera connector latch on the GS130WI module.
2. Insert one end of the FFC/FPC cable horizontally into the MIPI Camera connector with the contact side facing the PCB, then press the latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the GS130WI module MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_ffc_to_module.png" alt="FFC connected to GS130WI module" width="70%" />

:::warning Caution

The GS130W module and GS130WI module require opposite FFC/FPC cable insertion directions. Pay attention to distinguish them and do not reverse the connection.

:::

### Connect FFC/FPC Cables to the Development Board

<Tabs groupId="rdk-board">
<TabItem value="RDK X5">

1. Open the MIPI Camera connector latch on the RDK X5.
2. Insert the other end of the FFC/FPC cable vertically into the MIPI Camera connector with the contact side facing the Ethernet port, then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK X5 MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5-1.png" alt="FFC connected to development board" width="70%" />

After installation, the overall connection of the GS130WI module, RDK X5, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5-2.png" alt="GS130WI connected to RDK X5" width="80%" />

</TabItem>
<TabItem value="RDK X5 Module">

1. Open the MIPI Camera connector latch on the RDK X5 Module carrier board.
2. Insert the other end of the FFC/FPC cable horizontally into the MIPI interface with the contact side facing the PCB, then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK X5 Module carrier board MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5_module-1.png" alt="GS130WI connected to RDK X5 Module" width="70%" />

After installation, the overall connection of the GS130WI module, RDK X5 Module, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5_module-2.png" alt="GS130WI connected to RDK X5 Module" width="80%" />

</TabItem>
<TabItem value="RDK S100/S100P">

1. Open the MIPI Camera connector latch on the RDK S100 with Camera expansion board installed.
2. Insert the other end of the FFC/FPC cable horizontally into the MIPI Camera connector with the contact side facing the PCB, then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK S100 MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_s100-1.png" alt="GS130WI connected to RDK S100" width="70%" />

After installation, the overall connection of the GS130WI module, RDK S100, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_s100-2.png" alt="GS130WI connected to RDK S100" width="80%" />

</TabItem>
</Tabs>

### Connect the IMU Timestamp Interface

:::info Note

This interface is used for IMU hardware timestamping. Whether it needs to be connected and the wire sequence depend on software requirements. Refer to your actual software requirements.

:::

Insert the slim connector side of the 3-pin cable into the slim connector interface on the GS130WI module with the gold fingers facing outward on the PCB.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_3pin_connection.png" alt="3-pin cable connected to GS130WI" width="70%" />

The Dupont connector side is used to connect to development board pins or other interfaces for IMU hardware timestamping.

