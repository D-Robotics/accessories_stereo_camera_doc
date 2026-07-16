---
sidebar_position: 2
---

# Installation Guide

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocScope from '@site/src/components/DocScope';
```

## Required Items

Prepare the following items to install the module:


| Item | Image |
| --- | --- |
| GS130W module | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_module.png" alt="GS130W module" /> |
| Development board (supported board from Compatible Boards) | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_supported_board.png" alt="Development board" /> |
| FFC/FPC cables x2 (22-pin, 0.5 mm pitch, same-side contacts) | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_ffc_cable.png" alt="FFC/FPC cable" /> |



## Installation and Connection

### Connect FFC/FPC Cables to the GS130W Module


:::warning Note
- Power off the development board before connecting FFC/FPC cables to avoid device damage caused by electrical arcing or misaligned contacts.
- FFC/FPC cables are flexible; do not pull them forcefully.
- The main PCB of the GS130W module is exposed. Avoid dropping metal objects onto it during installation and use to prevent short circuits.
:::

1. Open the MIPI Camera connector latch on the GS130W module.
2. Insert one end of the FFC/FPC cable horizontally into the MIPI Camera connector with the contacts facing away from the PCB, then press the latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the GS130W module MIPI Camera interfaces.

![FFC connected to GS130W module](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_ffc_to_module.png)

:::warning Note

The FFC/FPC cable insertion direction for the GS130W module is opposite to that of the GS130WI module. Take care to distinguish them and avoid reverse connection.

:::

### Connect FFC/FPC Cables to the Development Board


<Tabs groupId="rdk-board">
<TabItem value="RDK X5">


1. Open the MIPI Camera connector latch on the RDK X5.
2. Insert the other end of the FFC/FPC cable vertically into the MIPI Camera connector with the contacts facing toward the Ethernet port, then press the connector latch closed.
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK X5 MIPI Camera interfaces.

![FFC connected to development board](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_x5-1.png)


After installation, the overall connection of the GS130W module, RDK X5, and FFC/FPC cables is shown below.

![GS130W connected to RDK X5](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_x5-2.png)

</TabItem>
<TabItem value="RDK X5 Module">

1. Open the MIPI Camera connector latch on the RDK X5 Module carrier board;
2. Insert the other end of the FFC/FPC cable horizontally into the MIPI connector with the contacts facing toward the PCB, then press the connector latch closed;
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK X5 Module carrier board MIPI Camera interfaces.

![GS130W connected to RDK X5 Module](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_x5_module-1.png)


After installation, the overall connection of the GS130W module, RDK X5 Module, and FFC/FPC cables is shown below.

![GS130W connected to RDK X5 Module](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_x5_module-2.png)


</TabItem>
<TabItem value="RDK S100/S100P">

1. Open the MIPI Camera connector latch on the RDK S100 with the Camera expansion board installed;
2. Insert the other end of the FFC/FPC cable horizontally into the MIPI Camera connector with the contacts facing toward the PCB, then press the connector latch closed;
3. Repeat for the second FFC/FPC cable to complete the connection between the FFC/FPC cables and the RDK S100 MIPI Camera interfaces.

![GS130W connected to RDK S100](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_s100-1.png)


After installation, the overall connection of the GS130W module, RDK S100, and FFC/FPC cables is shown below.

![GS130W connected to RDK S100](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_s100-2.png)

</TabItem>
</Tabs>


