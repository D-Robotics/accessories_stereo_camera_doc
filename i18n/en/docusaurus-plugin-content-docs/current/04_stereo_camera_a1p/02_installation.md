---
sidebar_position: 2
title: Installation Guide
description: Required items, FFC/FPC cable connection steps, and development board installation for the A1P module.
---

# Installation Guide

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Bill of Materials

The following items are required to install the module:

| Item Name | Item Image |
| --- | --- |
| A1P module | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_module.png" alt="A1P module" /> |
| Development board (supported board from compatible platforms list) | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_supported_board.png" alt="Development board" /> |
| FFC/FPC cables x2 (22-pin, 0.5 mm pitch, same-side contacts) | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_ffc_cable.png" alt="FFC/FPC cable" /> |
| 3-pin cable (1.25 mm slim connector - Dupont wires) | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_3pin_cable.png" alt="3-pin cable" /> |

## Installation and Connection

### Connect FFC/FPC Cables to the A1P Module

:::warning Caution
- When connecting FFC/FPC cables, always power off the development board to prevent device damage from arcing or misaligned contacts.
- FFC/FPC cables are flexible; do not pull them forcefully.
- The main PCB of the A1P module is exposed. Avoid dropping metal objects onto it during installation and use to prevent short circuits.
:::

1. Open the MIPI Camera connector latch on the A1P module.
2. Insert one end of the FFC/FPC cable horizontally into the MIPI Camera connector with the contact side facing the PCB, then press the latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the A1P module MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_stereo_camera_a1p/zh/a1p_ffc_to_module.png" alt="FFC connected to A1P module" width="70%" />

:::warning Caution

The GS130WI, A1, and A1P modules require the opposite FFC/FPC cable insertion direction from the GS130W module. Pay attention to distinguish them and do not reverse the connection.

:::

### Connect FFC/FPC Cables to the Development Board

<Tabs groupId="rdk-board">
<TabItem value="RDK X5">

1. Open the MIPI Camera connector latch on the RDK X5.
2. Insert the other end of the FFC/FPC cable vertically into the MIPI Camera connector with the contact side facing the Ethernet port, then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK X5 MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5-1.png" alt="FFC connected to development board" width="70%" />

After installation, the overall connection of the A1P module, RDK X5, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5-2.png" alt="A1P connected to RDK X5" width="80%" />

</TabItem>
<TabItem value="RDK X5 Module">

1. Open the MIPI Camera connector latch on the RDK X5 Module carrier board.
2. Insert the other end of the FFC/FPC cable horizontally into the MIPI interface with the contact side facing the PCB, then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK X5 Module carrier board MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5_module-1.png" alt="A1P connected to RDK X5 Module" width="70%" />

After installation, the overall connection of the A1P module, RDK X5 Module, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5_module-2.png" alt="A1P connected to RDK X5 Module" width="80%" />

</TabItem>
<TabItem value="RDK S100/S100P">

1. Open the MIPI Camera connector latch on the RDK S100 with Camera expansion board installed.
2. Insert the other end of the FFC/FPC cable horizontally into the MIPI Camera connector with the contact side facing the PCB, then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK S100 MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_s100-1.png" alt="A1P connected to RDK S100" width="70%" />

After installation, the overall connection of the A1P module, RDK S100, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_s100-2.png" alt="A1P connected to RDK S100" width="80%" />

</TabItem>
<TabItem value="RDK S600">

1. Open the MIPI Camera connector latch on the RDK S600.
2. Insert the other end of the FFC/FPC cable horizontally into the MIPI Camera connector with the contact side facing the PCB (facing up), then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK S600 MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_ffc_to_board_s600.png" alt="FFC connected to RDK S600" width="70%" />

After installation, the overall connection of the A1P module, RDK S600, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/04_stereo_camera_a1p/zh/a1p_connection_s600.png" alt="A1P connected to RDK S600" width="80%" />

</TabItem>
</Tabs>

### Connect the IMU INT Interface

:::info Note

This interface is used for IMU hardware timestamping. Whether it needs to be connected and the wire sequence depend on software requirements. Refer to your actual software requirements.

:::

Insert the slim connector side of the 3-pin cable into the slim connector interface on the A1P module with the gold fingers facing outward on the PCB.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_3pin_connection.png" alt="3-pin cable connected to A1P" width="70%" />

The Dupont connector side is used to connect to development board pins or other interfaces for IMU hardware timestamping.
