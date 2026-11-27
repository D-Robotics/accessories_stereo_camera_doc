---
sidebar_position: 2
title: Installation Guide
description: Required items, FFC/FPC cable connection steps, and development board installation for the A1 module.
---

# Installation Guide

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Bill of Materials

Prepare the following items to install the module:

| Item | Image |
| --- | --- |
| A1 module | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_module.png" alt="A1 module" /> |
| Development board (supported board from Compatible Platforms) | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_supported_board.png" alt="Development board" /> |
| FFC/FPC cables x2 (22-pin, 0.5 mm pitch, same-side contacts) | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_ffc_cable.png" alt="FFC/FPC cable" /> |

## Installation and Connection

### Connect FFC/FPC Cables to the A1 Module

:::warning Note
- Power off the development board before connecting FFC/FPC cables to avoid device damage caused by electrical arcing or misaligned contacts.
- FFC/FPC cables are flexible; do not pull them forcefully.
- The main PCB of the A1 module is exposed. Avoid dropping metal objects onto it during installation and use to prevent short circuits.
:::

1. Open the MIPI Camera connector latch on the A1 module.
2. Insert one end of the FFC/FPC cable horizontally into the MIPI Camera connector with the contacts facing toward the PCB, then press the latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the A1 module MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_ffc_to_module.png" alt="FFC connected to A1 module" width="70%" />

:::warning Note

The GS130WI, A1, and A1P modules require the opposite FFC/FPC cable insertion direction from the GS130W module. Pay attention to distinguish them and do not reverse the connection.

:::

### Connect FFC/FPC Cables to the Development Board

<Tabs groupId="rdk-board">
<TabItem value="RDK X5">

1. Open the MIPI Camera connector latch on the RDK X5.
2. Insert the other end of the FFC/FPC cable vertically into the MIPI Camera connector with the contacts facing toward the Ethernet port, then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK X5 MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5-1.png" alt="FFC connected to development board" width="70%" />

After installation, the overall connection of the A1 module, RDK X5, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5-2.png" alt="A1 connected to RDK X5" width="80%" />

</TabItem>
<TabItem value="RDK X5 Module">

1. Open the MIPI Camera connector latch on the RDK X5 Module carrier board.
2. Insert the other end of the FFC/FPC cable horizontally into the MIPI interface with the contacts facing toward the PCB, then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK X5 Module carrier board MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5_module-1.png" alt="A1 connected to RDK X5 Module" width="70%" />

After installation, the overall connection of the A1 module, RDK X5 Module, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5_module-2.png" alt="A1 connected to RDK X5 Module" width="80%" />

</TabItem>
<TabItem value="RDK S100/S100P">

1. Open the MIPI Camera connector latch on the RDK S100 with the Camera expansion board installed.
2. Insert the other end of the FFC/FPC cable horizontally into the MIPI Camera connector with the contacts facing toward the PCB, then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK S100 MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_s100-1.png" alt="A1 connected to RDK S100" width="70%" />

After installation, the overall connection of the A1 module, RDK S100, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_s100-2.png" alt="A1 connected to RDK S100" width="80%" />

</TabItem>
<TabItem value="RDK S600">

1. Open the MIPI Camera connector latch on the RDK S600.
2. Insert the other end of the FFC/FPC cable horizontally into the MIPI Camera connector with the contacts facing toward the PCB (facing up), then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK S600 MIPI Camera interfaces.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_ffc_to_board_s600.png" alt="FFC connected to RDK S600" width="70%" />

After installation, the overall connection of the A1 module, RDK S600, and FFC/FPC cables is shown below.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_connection_s600.png" alt="A1 connected to RDK S600" width="80%" />

</TabItem>
</Tabs>
