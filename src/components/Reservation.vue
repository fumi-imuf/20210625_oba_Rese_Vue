<template>
  <div class="reservation-container">
    <table>
     <tr>
       <th>Shop</th>
       <td>店名</td><!--{{shop_name}}-->
     </tr>
     <tr>
       <th>Date</th>
       <td>2021-6-1</td><!--{{date}}-->
     </tr>
     <tr>
       <th>Time</th>
       <td>18:00</td><!--{{time}}-->
     </tr>
     <tr>
       <th>Number</th>
       <td>1人</td>
     </tr>
    </table>
  </div>
</template>




<style scoped>
.reservation-container {
  width: 80%;
  background-color: #5c73b7;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
}

th {
  font-weight: lighter;
  text-align: left;
  padding: 10px;
  font-size: 0.5rem;
}

td {
  text-align: left;
  font-size: 0.5rem;
  padding-left: 5px;
}
</style>