<template>
  <div class="content">
    <div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import {
  get_posts,
  post_posts,
  get_users,
  post_users,
  get_DATA,
} from "@/api/api";
export default {
  async mounted() {
    this.getData()
    setInterval(async () => {
      this.getData()
    }, 60 * 1000);
  },
  data() {
    return {
      datata: [],
      chartOptions: {},
    };
  },
  methods: {
    async getData() {
      
      let res = await get_DATA({});
      this.datata = res.data;
      console.log(this.datata);
      let that = this;
      this.chartOptions = {
        chart: {
          zoomType: "xy",
        },
        title: {
          text: "拉钩网深圳企业招聘信息",
        },
        subtitle: {
          text: "数据来源: www.lagou.com",
        },
        xAxis: [
          {
            categories: this.datata.map((i) => i.com_name),
            crosshair: true,
            labels: {
              //生成可以点击的<a>横坐标
              formatter: function() {
                console.log(
                  `<img src='http:${that.datata[this.pos].icon_src}'>`
                );

                //this.value的值是：一月或其他的横坐标（当前点击的横坐标的值），showDetails为自己写的函数
                return `<div >
                <a class='icon-content' href="${
                  that.datata[this.pos].com_url
                }"><div>${this.value}</div> <img src="http:${
                  that.datata[this.pos].icon_src
                }" class='com_icon '></a>
                     
              </div>`;
              },
              useHTML: true,
            },
          },
        ],
        yAxis: [
          {
            // Secondary yAxis
            title: {
              text: "招聘职位数量",
              style: {
                color: "#7cb5ec",
              },
            },
            labels: {
              format: "{value} ",
              style: {
                color: "#7cb5ec",
              },
            },
          },
          {
            // Primary yAxis
            labels: {
              format: "{value}",
              style: {
                color: "#434348",
              },
            },
            title: {
              text: "简历处理率",
              style: {
                color: "#434348",
              },
            },
            opposite: true,
          },
          {
            // Tertiary yAxis
            title: {
              text: "面试评价数",
              style: {
                color: "#90ed7d",
              },
            },
            labels: {
              format: "{value}",
              style: {
                color: "#90ed7d",
              },
            },
            opposite: true,
          },
        ],
        tooltip: {
          shared: true,
          backgroundColor: {
            linearGradient: [0, 0, 0, 60],
            stops: [
              [0, "#FFFFFF"],
              [1, "#E0E0E0"],
            ],
          },
          borderWitdh: 1,
          borderColor: "#AAA",
        },
        legend: {
          layout: "vertical",
          align: "left",
          x: 80,
          verticalAlign: "top",
          y: 15,
          floating: true,
        },
        series: [
          {
            name: "招聘职位数量",
            type: "column",
            yAxis: 0,
            data: this.datata.map((i) => parseInt(i.job_num)),
            tooltip: {
              valueSuffix: "",
              color: "#7cb5ec",
            },
          },
          {
            name: "简历处理率",
            type: "column",
            yAxis: 1,
            data: this.datata.map((i) => parseInt(i.handle_rate)),
            marker: {
              enabled: false,
            },
            tooltip: {
              valueSuffix: "%",
              color: "#434348",
            },
          },
          {
            name: "面试评价数",
            type: "column",
            yAxis: 2,
            data: this.datata.map((i) => parseInt(i.comment_num)),
            tooltip: {
              valueSuffix: "",
              color: "#90ed7d",
            },
          },
        ],
      };
    },
  },
};
</script>

<style type="sass" scoped>
/deep/ .com_icon {
  width: 30px;
  height: 30px;
  display: table;
  margin: 0 auto;
  z-index: 0;
}
/deep/ .icon-content {
  text-decoration: none;
  color: black;
  z-index: 0;
}
</style>
