import React from 'react';
import { Dimensions } from 'react-native';
import { Path } from 'react-native-svg';

import { BackgroundImage } from './styles';

const paths = [
  "M145.615 482.582C143.65 473.996 138.976 467.434 132.454 464.106C125.932 460.777 117.875 460.843 109.77 464.291C102.484 467.39 96.3031 472.827 93.2369 478.836C91.7474 481.755 91.5144 484.438 92.5443 486.812C93.5608 489.155 95.628 490.827 98.2131 492.146C100.964 493.549 104.301 494.553 107.58 495.54C110.445 496.402 113.151 497.216 115.06 498.19C116.708 499.031 118.814 500.644 121.042 502.35C126.251 506.339 132.154 510.86 137.497 509.684C140.037 509.125 142.07 507.382 143.538 504.505C146.605 498.496 147.381 490.301 145.615 482.582Z",
  "M162.803 450.171C162.332 446.543 160.481 443.655 157.723 442.248C154.965 440.84 151.541 441.036 148.326 442.784C145.374 444.39 142.786 447.158 141.041 450.577C139.297 453.997 138.574 457.715 139.006 461.049C139.476 464.677 141.328 467.565 144.086 468.973C146.843 470.38 150.268 470.184 153.482 468.436C156.435 466.83 159.022 464.063 160.767 460.643C162.512 457.224 163.235 453.505 162.803 450.171Z",
  "M140.405 438.742C139.934 435.113 138.083 432.225 135.325 430.818C132.567 429.41 129.142 429.606 125.928 431.354C122.975 432.96 120.388 435.728 118.643 439.147C116.898 442.567 116.175 446.286 116.608 449.619C117.078 453.248 118.93 456.136 121.687 457.543C124.445 458.95 127.87 458.755 131.084 457.006C134.037 455.4 136.624 452.633 138.369 449.213C140.114 445.794 140.837 442.075 140.405 438.742Z",
  "M170.648 480.612C171.181 477.733 170.516 475.103 168.776 473.209C167.375 471.684 165.368 470.798 163.125 470.712C160.034 470.594 156.77 471.942 154.171 474.411C152.047 476.429 150.611 478.974 150.129 481.579C149.596 484.459 150.26 487.088 152.001 488.983C152.603 489.638 153.317 490.176 154.114 490.582C155.171 491.121 156.373 491.431 157.651 491.479C160.743 491.597 164.007 490.249 166.606 487.78C168.73 485.763 170.165 483.217 170.648 480.612Z",
  "M111.366 452.568C111.84 449.014 111.016 445.58 109.107 443.146C107.721 441.38 105.825 440.276 103.769 440.036C101.214 439.739 98.6946 440.743 96.6759 442.864C94.8495 444.784 93.6306 447.44 93.2435 450.343C92.77 453.897 93.5934 457.331 95.5027 459.765C96.2926 460.772 97.2481 461.563 98.3045 462.103C99.1015 462.509 99.956 462.772 100.84 462.875C103.396 463.173 105.915 462.168 107.934 460.047C109.76 458.127 110.978 455.471 111.366 452.568Z",
  "M229.64 615.116C227.675 606.53 223.001 599.968 216.479 596.64C209.956 593.311 201.9 593.377 193.794 596.825C186.508 599.924 180.328 605.361 177.262 611.37C175.772 614.289 175.539 616.972 176.569 619.346C177.586 621.689 179.653 623.361 182.238 624.68C184.989 626.083 188.326 627.087 191.605 628.074C194.47 628.936 197.176 629.75 199.085 630.724C200.733 631.565 202.838 633.178 205.067 634.884C210.275 638.873 216.179 643.394 221.522 642.218C224.062 641.659 226.095 639.916 227.563 637.039C230.63 631.03 231.406 622.835 229.64 615.116Z",
  "M246.828 582.705C246.357 579.077 244.506 576.189 241.748 574.782C238.99 573.374 235.565 573.57 232.351 575.318C229.398 576.924 226.811 579.692 225.066 583.111C223.321 586.531 222.598 590.249 223.031 593.583C223.501 597.211 225.353 600.099 228.11 601.507C230.868 602.914 234.293 602.718 237.507 600.97C240.46 599.364 243.047 596.597 244.792 593.177C246.537 589.758 247.26 586.039 246.828 582.705Z",
  "M224.43 571.276C223.959 567.647 222.108 564.759 219.35 563.352C216.592 561.944 213.167 562.14 209.953 563.888C207 565.494 204.413 568.262 202.668 571.681C200.923 575.101 200.2 578.819 200.633 582.153C201.103 585.782 202.954 588.67 205.712 590.077C208.47 591.484 211.895 591.289 215.109 589.54C218.062 587.934 220.649 585.167 222.394 581.747C224.139 578.328 224.862 574.609 224.43 571.276Z",
  "M254.672 613.146C255.206 610.267 254.541 607.637 252.8 605.743C251.4 604.218 249.393 603.332 247.15 603.246C244.059 603.128 240.795 604.476 238.196 606.945C236.072 608.963 234.636 611.508 234.154 614.113C233.62 616.993 234.285 619.622 236.026 621.517C236.628 622.172 237.342 622.71 238.139 623.116C239.196 623.655 240.398 623.964 241.676 624.013C244.768 624.131 248.031 622.783 250.631 620.314C252.754 618.297 254.19 615.751 254.672 613.146Z",
  "M195.391 585.102C195.864 581.548 195.041 578.114 193.131 575.68C191.746 573.914 189.85 572.81 187.794 572.57C185.239 572.273 182.719 573.277 180.701 575.398C178.874 577.318 177.655 579.974 177.268 582.877C176.795 586.431 177.618 589.865 179.528 592.299C180.317 593.305 181.273 594.097 182.329 594.636C183.126 595.043 183.981 595.306 184.865 595.409C187.421 595.707 189.94 594.702 191.958 592.581C193.784 590.661 195.003 588.005 195.391 585.102Z",
  "M54.6601 696.542C52.6951 687.956 48.0212 681.394 41.4991 678.066C34.9769 674.737 26.9208 674.803 18.815 678.251C11.5289 681.35 5.34846 686.787 2.28219 692.796C0.792693 695.715 0.55977 698.398 1.58966 700.772C2.60613 703.115 4.67337 704.787 7.25846 706.106C10.0091 707.509 13.3462 708.513 16.6252 709.5C19.4904 710.362 22.1967 711.176 24.1058 712.151C25.7535 712.991 27.8589 714.604 30.0875 716.31C35.2959 720.299 41.1995 724.82 46.5427 723.644C49.0828 723.085 51.1153 721.342 52.5837 718.465C55.6501 712.456 56.4264 704.261 54.6601 696.542Z",
  "M71.8483 664.132C71.3777 660.503 69.5263 657.615 66.7686 656.208C64.0108 654.8 60.5859 654.996 57.3717 656.744C54.4189 658.35 51.8317 661.118 50.0868 664.537C48.3419 667.957 47.6189 671.675 48.0512 675.009C48.5218 678.637 50.3732 681.526 53.1308 682.933C55.8886 684.34 59.3136 684.144 62.5278 682.396C65.4805 680.79 68.0677 678.023 69.8127 674.603C71.5576 671.184 72.2807 667.465 71.8483 664.132Z",
  "M49.4502 652.702C48.9796 649.073 47.1283 646.185 44.3705 644.778C41.6127 643.37 38.1877 643.566 34.9735 645.314C32.0208 646.92 29.4336 649.688 27.6887 653.107C25.9437 656.527 25.2208 660.246 25.6531 663.579C26.1236 667.208 27.9749 670.096 30.7327 671.503C33.4905 672.91 36.9154 672.715 40.1297 670.966C43.0824 669.36 45.6695 666.593 47.4146 663.173C49.1593 659.754 49.8824 656.035 49.4502 652.702Z",
  "M79.6929 694.572C80.2262 691.693 79.5613 689.063 77.821 687.169C76.4204 685.644 74.4138 684.758 72.1706 684.672C69.0793 684.554 65.8154 685.902 63.2162 688.371C61.0921 690.389 59.6566 692.934 59.1742 695.539C58.6409 698.419 59.3058 701.048 61.0463 702.943C61.6486 703.598 62.3628 704.136 63.1597 704.542C64.2162 705.082 65.4182 705.391 66.6968 705.439C69.7881 705.557 73.052 704.209 75.6511 701.74C77.775 699.723 79.2106 697.177 79.6929 694.572Z",
  "M20.4112 666.528C20.8849 662.974 20.0613 659.54 18.152 657.107C16.7663 655.34 14.8706 654.236 12.8146 653.996C10.2591 653.699 7.73992 654.703 5.72127 656.824C3.89488 658.744 2.67596 661.4 2.28886 664.303C1.81534 667.857 2.63872 671.291 4.54806 673.725C5.33798 674.732 6.29341 675.523 7.34984 676.063C8.14681 676.469 9.00133 676.732 9.88544 676.835C12.4412 677.133 14.9602 676.128 16.9789 674.007C18.8049 672.088 20.0238 669.431 20.4112 666.528Z",
  "M138.685 829.076C136.72 820.49 132.046 813.928 125.524 810.6C119.002 807.271 110.946 807.337 102.84 810.785C95.5537 813.884 89.3733 819.321 86.307 825.33C84.8175 828.249 84.5846 830.932 85.6145 833.306C86.6309 835.649 88.6982 837.321 91.2833 838.64C94.0339 840.043 97.371 841.047 100.65 842.034C103.515 842.896 106.222 843.71 108.131 844.684C109.778 845.525 111.884 847.138 114.112 848.844C119.321 852.833 125.224 857.354 130.568 856.178C133.108 855.619 135.14 853.876 136.609 850.999C139.675 844.99 140.451 836.795 138.685 829.076Z",
  "M155.873 796.665C155.403 793.037 153.551 790.149 150.793 788.742C148.036 787.334 144.611 787.53 141.396 789.278C138.444 790.884 135.857 793.652 134.112 797.071C132.367 800.491 131.644 804.209 132.076 807.543C132.547 811.171 134.398 814.059 137.156 815.467C139.913 816.874 143.338 816.678 146.553 814.93C149.505 813.324 152.093 810.557 153.837 807.137C155.582 803.718 156.305 799.999 155.873 796.665Z",
  "M133.475 785.236C133.004 781.607 131.153 778.719 128.395 777.312C125.638 775.904 122.212 776.1 118.998 777.848C116.046 779.454 113.458 782.222 111.713 785.641C109.969 789.061 109.246 792.78 109.678 796.113C110.148 799.742 112 802.63 114.757 804.037C117.515 805.444 120.94 805.249 124.154 803.5C127.107 801.894 129.694 799.127 131.439 795.707C133.184 792.288 133.907 788.569 133.475 785.236Z",
  "M163.718 827.106C164.251 824.227 163.586 821.597 161.846 819.703C160.445 818.178 158.439 817.292 156.195 817.206C153.104 817.088 149.84 818.436 147.241 820.905C145.117 822.923 143.681 825.468 143.199 828.073C142.666 830.953 143.331 833.582 145.071 835.477C145.673 836.132 146.388 836.67 147.185 837.076C148.241 837.615 149.443 837.925 150.722 837.973C153.813 838.091 157.077 836.743 159.676 834.274C161.8 832.257 163.235 829.711 163.718 827.106Z",
  "M104.436 799.062C104.91 795.508 104.086 792.074 102.177 789.64C100.791 787.874 98.8954 786.77 96.8394 786.53C94.2839 786.233 91.7647 787.237 89.7461 789.358C87.9197 791.278 86.7008 793.934 86.3137 796.837C85.8401 800.391 86.6635 803.825 88.5729 806.259C89.3628 807.266 90.3182 808.057 91.3746 808.596C92.1716 809.003 93.0261 809.266 93.9102 809.369C96.466 809.667 98.985 808.662 101.004 806.541C102.83 804.622 104.049 801.965 104.436 799.062Z",
  "M418.636 53.3405C416.671 44.7537 411.997 38.1919 405.475 34.8636C398.953 31.5354 390.897 31.6011 382.791 35.0488C375.505 38.1477 369.324 43.5851 366.258 49.5939C364.769 52.5128 364.536 55.1962 365.566 57.5698C366.582 59.9127 368.649 61.5846 371.234 62.9036C373.985 64.3073 377.322 65.3115 380.601 66.298C383.466 67.16 386.173 67.9743 388.082 68.9485C389.729 69.7893 391.835 71.4016 394.063 73.1084C399.272 77.0973 405.175 81.6182 410.519 80.442C413.059 79.8828 415.091 78.1402 416.56 75.2627C419.626 69.254 420.402 61.0588 418.636 53.3405Z",
  "M435.824 20.9295C435.354 17.3009 433.502 14.4128 430.745 13.0056C427.987 11.5983 424.562 11.794 421.348 13.5421C418.395 15.1481 415.808 17.9157 414.063 21.3351C412.318 24.7546 411.595 28.4734 412.027 31.8068C412.498 35.4353 414.349 38.3235 417.107 39.7307C419.865 41.138 423.289 40.9423 426.504 39.1942C429.456 37.5882 432.044 34.8207 433.789 31.4012C435.534 27.9818 436.257 24.2628 435.824 20.9295Z",
  "M413.426 9.49962C412.956 5.87101 411.104 2.98304 408.346 1.57574C405.589 0.168445 402.164 0.36407 398.949 2.11224C395.997 3.71826 393.41 6.48581 391.665 9.90526C389.92 13.3247 389.197 17.0436 389.629 20.377C390.1 24.0056 391.951 26.8937 394.709 28.301C397.466 29.7083 400.891 29.5126 404.106 27.7644C407.058 26.1583 409.645 23.3909 411.39 19.9713C413.135 16.5518 413.858 12.8328 413.426 9.49962Z",
  "M443.669 51.3701C444.202 48.4906 443.537 45.8613 441.797 43.9668C440.396 42.4424 438.39 41.5557 436.147 41.4702C433.055 41.3522 429.791 42.7004 427.192 45.1692C425.068 47.1866 423.633 49.7321 423.15 52.3372C422.617 55.2167 423.282 57.8461 425.022 59.7406C425.625 60.3962 426.339 60.9337 427.136 61.3404C428.192 61.8795 429.394 62.1885 430.673 62.2373C433.764 62.3553 437.028 61.0071 439.627 58.5385C441.751 56.5211 443.187 53.9754 443.669 51.3701Z",
  "M384.387 23.3256C384.861 19.7721 384.037 16.3383 382.128 13.9045C380.742 12.1381 378.847 11.0336 376.791 10.794C374.235 10.4965 371.716 11.5011 369.697 13.6224C367.871 15.5417 366.652 18.1979 366.265 21.1015C365.791 24.655 366.615 28.0889 368.524 30.5227C369.314 31.5296 370.269 32.3215 371.326 32.8605C372.123 33.2672 372.977 33.5301 373.861 33.6331C376.417 33.9308 378.936 32.9262 380.955 30.8049C382.781 28.8855 384 26.2294 384.387 23.3256Z",
  "M502.661 185.874C500.696 177.288 496.022 170.726 489.5 167.398C482.978 164.069 474.922 164.135 466.816 167.583C459.53 170.682 453.349 176.119 450.283 182.128C448.793 185.047 448.561 187.73 449.59 190.104C450.607 192.447 452.674 194.119 455.259 195.438C458.01 196.841 461.347 197.845 464.626 198.832C467.491 199.694 470.198 200.508 472.107 201.482C473.754 202.323 475.86 203.936 478.088 205.642C483.297 209.631 489.2 214.152 494.544 212.976C497.084 212.417 499.116 210.674 500.585 207.797C503.651 201.788 504.427 193.593 502.661 185.874Z",
  "M519.849 153.463C519.378 149.835 517.527 146.947 514.769 145.54C512.012 144.132 508.587 144.328 505.372 146.076C502.42 147.682 499.832 150.45 498.088 153.869C496.343 157.289 495.62 161.007 496.052 164.341C496.523 167.969 498.374 170.857 501.132 172.265C503.889 173.672 507.314 173.476 510.529 171.728C513.481 170.122 516.068 167.355 517.813 163.935C519.558 160.516 520.281 156.797 519.849 153.463Z",
  "M497.451 142.034C496.98 138.405 495.129 135.517 492.371 134.11C489.614 132.702 486.188 132.898 482.974 134.646C480.022 136.252 477.434 139.02 475.689 142.439C473.945 145.859 473.222 149.578 473.654 152.911C474.124 156.54 475.976 159.428 478.733 160.835C481.491 162.242 484.916 162.047 488.13 160.298C491.083 158.692 493.67 155.925 495.415 152.505C497.16 149.086 497.883 145.367 497.451 142.034Z",
  "M527.694 183.904C528.227 181.025 527.562 178.395 525.822 176.501C524.421 174.976 522.415 174.09 520.171 174.004C517.08 173.886 513.816 175.234 511.217 177.703C509.093 179.721 507.657 182.266 507.175 184.871C506.642 187.751 507.307 190.38 509.047 192.275C509.649 192.93 510.364 193.468 511.161 193.874C512.217 194.413 513.419 194.722 514.698 194.771C517.789 194.889 521.053 193.541 523.652 191.072C525.776 189.055 527.211 186.509 527.694 183.904Z",
  "M468.412 155.859C468.886 152.306 468.062 148.872 466.153 146.438C464.767 144.672 462.871 143.568 460.815 143.328C458.26 143.03 455.741 144.035 453.722 146.156C451.896 148.076 450.677 150.732 450.29 153.635C449.816 157.189 450.64 160.623 452.549 163.057C453.339 164.063 454.294 164.855 455.351 165.394C456.148 165.801 457.002 166.064 457.886 166.167C460.442 166.465 462.961 165.46 464.98 163.339C466.806 161.419 468.025 158.763 468.412 155.859Z",
  "M327.681 267.301C325.716 258.714 321.043 252.152 314.52 248.824C307.998 245.495 299.942 245.561 291.836 249.009C284.55 252.108 278.37 257.545 275.303 263.554C273.814 266.473 273.581 269.156 274.611 271.53C275.627 273.873 277.695 275.545 280.28 276.864C283.03 278.267 286.368 279.272 289.646 280.258C292.512 281.12 295.218 281.934 297.127 282.909C298.775 283.749 300.88 285.362 303.109 287.068C308.317 291.057 314.221 295.578 319.564 294.402C322.104 293.843 324.137 292.1 325.605 289.223C328.671 283.214 329.448 275.019 327.681 267.301Z",
  "M344.87 234.89C344.399 231.261 342.548 228.373 339.79 226.966C337.032 225.558 333.607 225.754 330.393 227.502C327.44 229.108 324.853 231.876 323.108 235.295C321.363 238.715 320.64 242.433 321.072 245.767C321.543 249.395 323.394 252.284 326.152 253.691C328.91 255.098 332.335 254.902 335.549 253.154C338.502 251.548 341.089 248.781 342.834 245.361C344.579 241.942 345.302 238.223 344.87 234.89Z",
  "M322.471 223.46C322.001 219.831 320.15 216.943 317.392 215.536C314.634 214.128 311.209 214.324 307.995 216.072C305.042 217.678 302.455 220.446 300.71 223.865C298.965 227.285 298.242 231.004 298.674 234.337C299.145 237.966 300.996 240.854 303.754 242.261C306.512 243.668 309.937 243.473 313.151 241.724C316.104 240.118 318.691 237.351 320.436 233.931C322.181 230.512 322.904 226.793 322.471 223.46Z",
  "M352.714 265.33C353.247 262.451 352.583 259.821 350.842 257.927C349.442 256.402 347.435 255.516 345.192 255.43C342.101 255.312 338.837 256.661 336.237 259.129C334.113 261.147 332.678 263.692 332.195 266.297C331.662 269.177 332.327 271.806 334.068 273.701C334.67 274.356 335.384 274.894 336.181 275.3C337.237 275.84 338.439 276.149 339.718 276.197C342.809 276.315 346.073 274.967 348.672 272.499C350.796 270.481 352.232 267.935 352.714 265.33Z",
  "M293.432 237.286C293.906 233.732 293.083 230.298 291.173 227.865C289.788 226.098 287.892 224.994 285.836 224.754C283.28 224.457 280.761 225.461 278.743 227.582C276.916 229.502 275.697 232.158 275.31 235.062C274.837 238.615 275.66 242.049 277.569 244.483C278.359 245.49 279.315 246.282 280.371 246.821C281.168 247.227 282.023 247.49 282.907 247.593C285.462 247.891 287.981 246.886 290 244.765C291.826 242.846 293.045 240.189 293.432 237.286Z",
  "M411.706 399.834C409.741 391.248 405.067 384.686 398.545 381.358C392.023 378.029 383.967 378.095 375.861 381.543C368.575 384.642 362.395 390.079 359.328 396.088C357.839 399.007 357.606 401.69 358.636 404.064C359.652 406.407 361.719 408.079 364.305 409.398C367.055 410.801 370.392 411.805 373.671 412.792C376.536 413.654 379.243 414.468 381.152 415.442C382.8 416.283 384.905 417.896 387.134 419.602C392.342 423.591 398.246 428.112 403.589 426.936C406.129 426.377 408.161 424.634 409.63 421.757C412.696 415.748 413.472 407.553 411.706 399.834Z",
  "M428.894 367.423C428.424 363.795 426.572 360.907 423.815 359.5C421.057 358.092 417.632 358.288 414.418 360.036C411.465 361.642 408.878 364.41 407.133 367.829C405.388 371.249 404.665 374.967 405.097 378.301C405.568 381.929 407.419 384.818 410.177 386.225C412.935 387.632 416.36 387.436 419.574 385.688C422.527 384.082 425.114 381.315 426.859 377.895C428.604 374.476 429.327 370.757 428.894 367.423Z",
  "M406.496 355.994C406.026 352.365 404.174 349.477 401.417 348.07C398.659 346.662 395.234 346.858 392.02 348.606C389.067 350.212 386.48 352.98 384.735 356.399C382.99 359.819 382.267 363.538 382.699 366.871C383.17 370.5 385.021 373.388 387.779 374.795C390.537 376.202 393.961 376.007 397.176 374.258C400.128 372.652 402.716 369.885 404.461 366.465C406.205 363.046 406.928 359.327 406.496 355.994Z",
  "M436.739 397.864C437.272 394.985 436.607 392.355 434.867 390.461C433.466 388.936 431.46 388.05 429.217 387.964C426.125 387.846 422.861 389.194 420.262 391.663C418.138 393.681 416.703 396.226 416.22 398.831C415.687 401.711 416.352 404.34 418.092 406.235C418.695 406.89 419.409 407.428 420.206 407.834C421.262 408.373 422.464 408.683 423.743 408.731C426.834 408.849 430.098 407.501 432.697 405.032C434.821 403.015 436.257 400.469 436.739 397.864Z",
  "M377.457 369.82C377.931 366.266 377.107 362.832 375.198 360.398C373.812 358.632 371.917 357.528 369.861 357.288C367.305 356.991 364.786 357.995 362.767 360.116C360.941 362.036 359.722 364.692 359.335 367.595C358.861 371.149 359.685 374.583 361.594 377.017C362.384 378.024 363.34 378.815 364.396 379.355C365.193 379.761 366.047 380.024 366.932 380.127C369.487 380.425 372.006 379.42 374.025 377.299C375.851 375.38 377.07 372.723 377.457 369.82Z",
]

const iconPath = [
  "M0.765625 99L18.4023 19.4297H20.4531L28.6562 57.7109L19.6328 99H0.765625ZM29.8867 87.3789L33.9883 68.5117H38.9102L24.418 3.29688H43.4219L65.9805 99H46.8398L44.1055 87.3789H29.8867Z",
  "M73.7734 99V42.2617C73.7734 37.7044 75.8242 33.2383 79.9258 28.8633C84.9388 23.668 91.1823 21.0247 98.6562 20.9336V39.1172C94.8281 39.5729 92.7318 41.3503 92.3672 44.4492V99H73.7734ZM104.945 39.1172V20.9336C113.786 20.9336 120.759 24.4427 125.863 31.4609C128.598 35.2891 129.965 38.8893 129.965 42.2617V99H111.371V44.4492C111.371 41.4414 109.685 39.7096 106.312 39.2539C105.857 39.1628 105.401 39.1172 104.945 39.1172Z",
  "M141.996 9.99609C141.996 6.25911 143.682 3.43359 147.055 1.51953C148.604 0.608073 150.245 0.152344 151.977 0.152344C155.805 0.152344 158.676 1.83854 160.59 5.21094C161.41 6.76042 161.82 8.35547 161.82 9.99609C161.82 13.8242 160.134 16.6953 156.762 18.6094C155.212 19.4297 153.617 19.8398 151.977 19.8398C148.057 19.8398 145.141 18.1081 143.227 14.6445C142.406 13.1862 141.996 11.6367 141.996 9.99609ZM142.953 99V25.1719H161.273V99H142.953Z",
  "M173.852 99V42.2617C173.852 37.7044 175.857 33.2839 179.867 29C184.971 23.7135 191.215 21.0247 198.598 20.9336V39.1172C194.952 39.6641 192.901 41.487 192.445 44.5859V99H173.852ZM204.887 39.1172V20.9336C211.085 21.0247 216.371 22.7109 220.746 25.9922C224.939 22.6198 230.18 20.9336 236.469 20.9336V39.1172C232.276 39.2083 230.134 41.0312 230.043 44.5859V99H211.449V44.5859C211.267 41.0312 209.079 39.2083 204.887 39.1172ZM242.621 39.1172V20.9336C251.462 20.9336 258.435 24.4427 263.539 31.4609C266.273 35.2891 267.641 38.8893 267.641 42.2617V99H249.047V44.5859C248.865 41.0312 246.723 39.2083 242.621 39.1172Z",
  "M276.254 80.9531C276.254 86.2396 278.76 90.7057 283.773 94.3516C288.057 97.4505 293.253 99 299.359 99V82.1836C294.711 82.1836 292.113 81.0898 291.566 78.9023C291.475 78.3555 291.43 77.8086 291.43 77.2617V75.3477C291.521 73.7982 292.113 72.75 293.207 72.2031C293.663 71.9297 295.349 71.4284 298.266 70.6992C305.375 68.694 310.16 66.9622 312.621 65.5039V76.7148C312.621 79.4492 311.345 81.181 308.793 81.9102C308.155 82.0924 307.471 82.1836 306.742 82.1836V99C312.393 98.9089 316.996 97.4505 320.551 94.625C323.923 97.5417 328.389 99 333.949 99V82.0469C331.488 81.8646 330.212 80.4062 330.121 77.6719V41.9883C330.121 36.9753 328.025 32.3268 323.832 28.043C319.184 23.3945 313.441 21.0703 306.605 21.0703V37.8867C310.525 38.1602 312.53 39.9375 312.621 43.2188V46.3633C312.621 48.9154 307.745 51.832 297.992 55.1133C289.607 58.0299 284.822 59.8073 283.637 60.4453C278.806 63.6354 276.345 68.1471 276.254 73.9805V80.9531ZM277.211 40.6211L293.07 46.6367C293.161 40.8945 295.303 37.9779 299.496 37.8867V21.0703C293.207 21.0703 287.693 23.349 282.953 27.9062C279.216 31.7344 277.302 35.9727 277.211 40.6211Z",
  "M343.109 99V1.10938H362.797V99H343.109Z",
  "M371.273 78.4922L388.227 75.3477C388.227 78.3555 389.776 80.4974 392.875 81.7734C393.969 82.138 394.971 82.3659 395.883 82.457V99.6836C385.31 99.6836 377.973 95.9466 373.871 88.4727C372.139 85.3737 371.273 82.0469 371.273 78.4922ZM372.094 42.3984C372.094 33.9219 376.059 27.6328 383.988 23.5312C387.908 21.4349 391.781 20.3867 395.609 20.3867V37.3398C391.143 37.431 388.91 39.1172 388.91 42.3984C388.91 45.862 393.103 48.9154 401.488 51.5586C404.587 52.5612 408.233 53.5182 412.426 54.4297C418.715 55.6146 423.181 59.1237 425.824 64.957C427.191 67.9648 427.875 71.2917 427.875 74.9375C427.875 84.4167 424.138 91.3893 416.664 95.8555C412.38 98.4076 407.504 99.6836 402.035 99.6836V82.457C405.225 82.457 407.595 81.4089 409.145 79.3125C409.874 78.3099 410.238 77.2161 410.238 76.0312C410.238 73.2057 406.775 70.7448 399.848 68.6484C398.754 68.375 397.068 67.9193 394.789 67.2812C389.958 66.0052 386.632 64.957 384.809 64.1367C378.155 60.7643 374.145 55.7969 372.777 49.2344C372.322 47.0469 372.094 44.7682 372.094 42.3984ZM401.762 37.3398L401.898 20.3867C410.102 20.3867 416.71 23.3945 421.723 29.4102C424.913 33.3294 426.508 37.4766 426.508 41.8516L409.691 44.7227C409.691 40.6211 407.504 38.2057 403.129 37.4766C402.582 37.3854 402.126 37.3398 401.762 37.3398Z",
]

const MARGIN = 10
const vWidth = 500 + MARGIN
const vHeight = 900 + MARGIN
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Background: React.FC = ({children}) => {
  return (
    <>
      <BackgroundImage width={width} height={height} viewBox={[-MARGIN / 2, -MARGIN / 2, vWidth + MARGIN / 2, vHeight + MARGIN / 2].join(" ")}>
        {paths.map((d, key) => (
          <Path d={d} stroke='#F39A61' strokeWidth={5} key={key} />
        ))}

      </BackgroundImage>
        {children}
    </>
  );
}

export default Background;