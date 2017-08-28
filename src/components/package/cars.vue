<template>
  <div class="package">
    <div class="content-view">
      <h1 class="title">{{ msg }}</h1>
      <p  class="train">
        <table style="font-size: 20px;">
          <thead>
            <tr>
              <th width="5%">No</th>
              <th width="15%">Picture</th>
              <th width="10%">Type | Gear</th>
              <th width="10%">Mile</th>
              <th width="13%">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style="cursor: pointer;">
              <td style="text-align:center; padding:0;"> 1 </td>
              <td style="text-align:center;"><img src="../../assets/car1.png" style="width:50%;"></td>
              <td> กพ 5614 </td>
              <td> รถปิ๊กอัพ | เกียร์ธรรมดา </td>
              <td style="padding-right: 2%; text-align:right;"> 120,025 </td>
            </tr>
            <tr style="cursor: pointer;">
              <td style="text-align:center; padding:0;"> 2 </td>
              <td style="text-align:center;"><img src="../../assets/car2.png" style="width:50%;"></td>
              <td> หก 9999 </td>
              <td> รถเก๋ง | เกียร์ธรรมดา </td>
              <td style="padding-right: 2%; text-align:right;"> 89,025 </td>
            </tr>
          </tbody>
        </table>
      </p>
    </div>

    <md-button class="md-fab md-fab-bottom-right" style="position: fixed;">
      <md-icon>add</md-icon>
    </md-button>
    
  </div>
</template>

<script src="../../js/package/cars.js"></script>