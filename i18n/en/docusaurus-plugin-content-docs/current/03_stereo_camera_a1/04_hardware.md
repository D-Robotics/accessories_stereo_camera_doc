---
sidebar_position: 4
title: Hardware Reference
description: Structure dimensions, hardware topology, connector models, and interface pin definitions of the A1 module.
---

# Hardware Reference

## Mechanical Installation

The A1 module has two mounting holes at each end. Dimensions are shown below (Unit: mm). Detailed 3D model files are available in [Downloads](./06_downloads.md). Use two M3 bolts through these mounting holes to attach the A1 module to other structures.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_structure_dimensions.png" alt="A1 structural dimensions" width="80%" />

For applications that require higher positioning accuracy, use the two locating blind holes on the front of the module (92 mm spacing, 2.5 mm diameter) together with a custom structure to achieve relatively high installation accuracy.

:::tip Note

When installing, tighten the bolts alternately to avoid minor deformation of the A1 module metal housing, which could change the external parameters of the sensor positions.

:::

## Hardware Interface Description

### Hardware Topology

The diagram below shows the hardware topology between the A1 module and the RDK development board.

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_hardware_topology.jpg" alt="A1 hardware topology" width="80%" />

### Connector Models

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_connector_models.jpg" alt="A1 connector models" width="70%" />

| Connector | Model | Manufacturer |
| --- | --- | --- |
| 1 | AFC24-S22FIA-00 | Jushuo Electronics |
| 2 | AFC24-S22FIA-00 | Jushuo Electronics |

### Interface Description

#### ① Right MIPI Camera Interface

This interface is used for right camera and IMU data transmission.

The connector PIN1 location is shown below:

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_right_mipi_pin1.jpg" alt="Right MIPI PIN1 location" width="50%" />

The connector pinout is shown in the table below:

| PIN | Name | Description |
| --- | --- | --- |
| 1 | GND | |
| 2 | MDN0 | MIPI Data Negative 0, for video stream transmission |
| 3 | MDP0 | MIPI Data Positive 0, for video stream transmission |
| 4 | GND | |
| 5 | MDN1 | MIPI Data Negative 1, for video stream transmission |
| 6 | MDP1 | MIPI Data Positive 1, for video stream transmission |
| 7 | GND | |
| 8 | MCN | MIPI Clock Negative, for video stream transmission |
| 9 | MCP | MIPI Clock Positive, for video stream transmission |
| 10 | GND | |
| 11 | N/A | |
| 12 | N/A | |
| 13 | GND | |
| 14 | N/A | |
| 15 | N/A | |
| 16 | GND | |
| 17 | RESET | Connected to the Camera Sensor XSHUTDN pin for hardware reset of the sensor chip |
| 18 | FSYNC | Connected to the Camera Sensor TRIGL/FSYNC pin to enable exposure in Slave mode |
| 19 | GND | |
| 20 | SCL | Connected to the Camera Sensor SCL pin for sensor configuration |
| 21 | SDA | Connected to the Camera Sensor SDA pin for sensor configuration |
| 22 | 3V3 | |

#### ② Left MIPI Camera Interface

This interface is used for left camera data transmission.

The connector PIN1 location is the same as the right MIPI Camera interface.

The connector pinout is shown in the table below:

| PIN | Name | Description |
| --- | --- | --- |
| 1 | GND | |
| 2 | MDN0 | MIPI Data Negative 0, for video stream transmission |
| 3 | MDP0 | MIPI Data Positive 0, for video stream transmission |
| 4 | GND | |
| 5 | MDN1 | MIPI Data Negative 1, for video stream transmission |
| 6 | MDP1 | MIPI Data Positive 1, for video stream transmission |
| 7 | GND | |
| 8 | MCN | MIPI Clock Negative, for video stream transmission |
| 9 | MCP | MIPI Clock Positive, for video stream transmission |
| 10 | GND | |
| 11 | N/A | |
| 12 | N/A | |
| 13 | GND | |
| 14 | N/A | |
| 15 | N/A | |
| 16 | GND | |
| 17 | RESET | Connected to the Camera Sensor XSHUTDN pin for hardware reset of the sensor chip |
| 18 | FSYNC | Connected to the Camera Sensor TRIGL/FSYNC pin to enable exposure in Slave mode |
| 19 | GND | |
| 20 | SCL | Connected to the Camera Sensor SCL pin for sensor configuration |
| 21 | SDA | Connected to the Camera Sensor SDA pin for sensor configuration |
| 22 | 3V3 | |
