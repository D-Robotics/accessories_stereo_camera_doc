---
sidebar_position: 0
sidebar_label: RDK Stereo Camera User Manual
title: RDK Stereo Camera User Manual
description: Overview of the RDK stereo camera modules, comparing platform support, resolution, baseline, and IMU configuration across the GS130W, GS130WI, A1, and A1P.
---

# RDK Stereo Camera User Manual

This documentation covers stereo camera modules for D-Robotics RDK™ developer kits, including product selection, installation, bring-up, and secondary development.

## Product Overview

RDK™ stereo camera modules are intended for robotics vision, machine vision inspection, and motion-pose sensing. D-Robotics currently offers four stereo camera modules.

<div className="stereo-lineup-table-wrap" style={{ overflowX: 'auto' }}>

<table style={{ tableLayout: 'fixed', width: '100%', minWidth: '960px' }}>
  <thead>
    <tr>
      <th style={{ width: '16%', whiteSpace: 'normal' }}>Product name</th>
      <th style={{ width: '21%', whiteSpace: 'normal' }}><a href="/accessories_stereo_camera_doc/en/stereo_camera_gs130w/product_overview?p=GS130W">RDK™ Stereo Camera GS130W</a></th>
      <th style={{ width: '21%', whiteSpace: 'normal' }}><a href="/accessories_stereo_camera_doc/en/stereo_camera_gs130wi/product_overview?p=GS130WI">RDK™ Stereo Camera GS130WI</a></th>
      <th style={{ width: '21%', whiteSpace: 'normal' }}><a href="/accessories_stereo_camera_doc/en/stereo_camera_a1/product_overview?p=A1">RDK™ Stereo A1</a></th>
      <th style={{ width: '21%', whiteSpace: 'normal' }}><a href="/accessories_stereo_camera_doc/en/stereo_camera_a1p/product_overview?p=A1P">RDK™ Stereo A1P</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Product image</td>
      <td><img className="stereo-lineup-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/overview/zh/lineup_gs130w.png" alt="RDK Stereo Camera GS130W" /></td>
      <td><img className="stereo-lineup-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/overview/zh/lineup_gs130wi.png" alt="RDK Stereo Camera GS130WI" /></td>
      <td><img className="stereo-lineup-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/overview/zh/lineup_a1.png" alt="RDK Stereo A1" /></td>
      <td><img className="stereo-lineup-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/overview/zh/lineup_a1p.png" alt="RDK Stereo A1P" /></td>
    </tr>
    <tr>
      <td>Compatible platforms</td>
      <td colSpan="4">RDK X5, RDK S100/S100P, RDK S600</td>
    </tr>
    <tr>
      <td>Stereo resolution</td>
      <td>Landscape 1280×1088</td>
      <td>Portrait 1088×1280</td>
      <td>Portrait 1088×1280</td>
      <td>Portrait 1088×1280</td>
    </tr>
    <tr>
      <td>Stereo baseline</td>
      <td>80 mm</td>
      <td>70 mm</td>
      <td>70 mm</td>
      <td>70 mm</td>
    </tr>
    <tr>
      <td>IMU model</td>
      <td>None</td>
      <td>ICM42688-P</td>
      <td>None</td>
      <td>ICM42607-C</td>
    </tr>
  </tbody>
</table>

</div>

## Documentation Structure

Each stereo camera manual uses the same chapter structure so you can look up content by usage phase:

| Chapter | Description |
| --- | --- |
| Product Overview | Product features, compatible boards, hardware interfaces, and key specifications |
| Installation | Bill of materials, wiring/installation steps, and notes |
| Quick Start | SDK or system tool setup, sample execution, and verification |
| Hardware | Mechanical dimensions, interface definitions, topology, and pin descriptions |
| Software | API documentation, driver/SDK usage, and secondary development guidance |
| Downloads | Spec sheets, datasheets, 3D drawings, and other reference materials |
