import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

// Convert Google Drive file links to embeddable video URLs
const getDriveVideoUrl = (fileId: string, autoplay: boolean = false) => {
  // Google Drive preview URL - autoplay may be limited by browser policies
  const baseUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  return baseUrl;
};

// Video portfolio organized by categories
const videoCategories = [
  {
    name: "Ad Edits",
    folderLink: "https://drive.google.com/drive/folders/11L4AV16lwUziWI4Q7iW69pMtbjVQUoK_?usp=drive_link",
    videos: [
      { id: "1dKJvM_r5MEdHgpuu81y1VXRAKWi2hNWk", title: "Ad Edit 1", driveLink: "https://drive.google.com/file/d/1dKJvM_r5MEdHgpuu81y1VXRAKWi2hNWk/view?usp=drive_link" },
      { id: "1mBv75WOUJjVgLFUafp7gHlhjzWYpW3VR", title: "Ad Edit 2", driveLink: "https://drive.google.com/file/d/1mBv75WOUJjVgLFUafp7gHlhjzWYpW3VR/view?usp=drive_link" },
      { id: "1YnCvxFh-5jdXr1ZcsmmxDoYXP2c5RFd2", title: "Ad Edit 3", driveLink: "https://drive.google.com/file/d/1YnCvxFh-5jdXr1ZcsmmxDoYXP2c5RFd2/view?usp=drive_link" },
      { id: "18zp1mzFhnez85z6mmFDAdvjQuBgW01oI", title: "Ad Edit 4", driveLink: "https://drive.google.com/file/d/18zp1mzFhnez85z6mmFDAdvjQuBgW01oI/view?usp=drive_link" },
      { id: "1_A6IhHdfnzdu2PVewoi5ZOmUSwe2vAR3", title: "Ad Edit 5", driveLink: "https://drive.google.com/file/d/1_A6IhHdfnzdu2PVewoi5ZOmUSwe2vAR3/view?usp=drive_link" },
      { id: "1fE-9Hh_K17V2iPpaBINvz57ZtOYq_4Y-", title: "Ad Edit 6", driveLink: "https://drive.google.com/file/d/1fE-9Hh_K17V2iPpaBINvz57ZtOYq_4Y-/view?usp=drive_link" },
    ],
  },
  {
    name: "AI Videos",
    folderLink: "https://drive.google.com/drive/folders/1xXgQ1eK4WCOx4VclNvhADPYerI8_F6YS?usp=sharing",
    videos: [
      { id: "1Z2eevSVZCNp_iw-CjwhCfcvJgPAQFIQs", title: "AI Video 1", driveLink: "https://drive.google.com/file/d/1Z2eevSVZCNp_iw-CjwhCfcvJgPAQFIQs/view?usp=sharing" },
      { id: "1nsc0JJFismuIbmrNXzGRIM32-aOxKPYl", title: "AI Video 2", driveLink: "https://drive.google.com/file/d/1nsc0JJFismuIbmrNXzGRIM32-aOxKPYl/view?usp=sharing" },
      { id: "10onuUhqQA2n07Px9buaPry9lirC-3wPc", title: "AI Video 3", driveLink: "https://drive.google.com/file/d/10onuUhqQA2n07Px9buaPry9lirC-3wPc/view?usp=sharing" },
      { id: "1WG4BE4OctpTpjCCwn6-he6ZOn6bCypyB", title: "AI Video 4", driveLink: "https://drive.google.com/file/d/1WG4BE4OctpTpjCCwn6-he6ZOn6bCypyB/view?usp=sharing" },
      { id: "1h1ZXQfw8dolxcmRIf95ATsOZO3o0wsXu", title: "AI Video 5", driveLink: "https://drive.google.com/file/d/1h1ZXQfw8dolxcmRIf95ATsOZO3o0wsXu/view?usp=sharing" },
      { id: "1-8Ln6qh15eazWXAdciURNU8GbQPEq2Ac", title: "AI Video 6", driveLink: "https://drive.google.com/file/d/1-8Ln6qh15eazWXAdciURNU8GbQPEq2Ac/view?usp=sharing" },
      { id: "1XTsX3dZaqenOZStJqWcJR6F9nZDt6ayg", title: "AI Video 7", driveLink: "https://drive.google.com/file/d/1XTsX3dZaqenOZStJqWcJR6F9nZDt6ayg/view?usp=sharing" },
      { id: "1vohpjFCuYi1QEmfEZkzSUyybL-Ok1B0C", title: "AI Video 8", driveLink: "https://drive.google.com/file/d/1vohpjFCuYi1QEmfEZkzSUyybL-Ok1B0C/view?usp=sharing" },
      { id: "1VAChnJ8-ArRM_fxtKzlX_UWCuFbhp7es", title: "AI Video 9", driveLink: "https://drive.google.com/file/d/1VAChnJ8-ArRM_fxtKzlX_UWCuFbhp7es/view?usp=sharing" },
      { id: "1jYCmety_a-afMpgbTrp-rTf9iBg7-cTK", title: "AI Video 10", driveLink: "https://drive.google.com/file/d/1jYCmety_a-afMpgbTrp-rTf9iBg7-cTK/view?usp=sharing" },
      { id: "1KX0CWdidG9Tv3A5hht5gHN007vb7DLHk", title: "AI Video 11", driveLink: "https://drive.google.com/file/d/1KX0CWdidG9Tv3A5hht5gHN007vb7DLHk/view?usp=sharing" },
      { id: "139UJfiU-izsnwZjl6eyxeebJtTvGEaz7", title: "AI Video 12", driveLink: "https://drive.google.com/file/d/139UJfiU-izsnwZjl6eyxeebJtTvGEaz7/view?usp=sharing" },
      { id: "11ASUg0ZrBmrFYcnqN02pJyMatA8kcYm5", title: "AI Video 13", driveLink: "https://drive.google.com/file/d/11ASUg0ZrBmrFYcnqN02pJyMatA8kcYm5/view?usp=sharing" },
      { id: "1xSI9as9n2AaEdCOM8ttPgtO7Q5KfDWKV", title: "AI Video 14", driveLink: "https://drive.google.com/file/d/1xSI9as9n2AaEdCOM8ttPgtO7Q5KfDWKV/view?usp=sharing" },
      { id: "18P6UULgkbgB-IW61uUVIp9164R4m5RH6", title: "AI Video 15", driveLink: "https://drive.google.com/file/d/18P6UULgkbgB-IW61uUVIp9164R4m5RH6/view?usp=sharing" },
      { id: "1398jmyaexU2WFZNPdiG0x1b0Xo7wriaj", title: "AI Video 16", driveLink: "https://drive.google.com/file/d/1398jmyaexU2WFZNPdiG0x1b0Xo7wriaj/view?usp=sharing" },
      { id: "18FxLzAxnZWB_QO0ct-2FmszpiFVf1pBN", title: "AI Video 17", driveLink: "https://drive.google.com/file/d/18FxLzAxnZWB_QO0ct-2FmszpiFVf1pBN/view?usp=sharing" },
    ],
  },
  {
    name: "Digital Products",
    folderLink: "https://drive.google.com/drive/folders/1GGW8p22YUeh6C5zFoXlYrO0Xwu_4jB9u?usp=drive_link",
    videos: [
      { id: "1T_8c_1fR7jQkVMP9exqp3jUOd4TFCZhE", title: "Digital Product 1", driveLink: "https://drive.google.com/file/d/1T_8c_1fR7jQkVMP9exqp3jUOd4TFCZhE/view?usp=drive_link" },
      { id: "1uk9gVk9uRiGXdb7vjmMxxN0aYYLFRMYc", title: "Digital Product 2", driveLink: "https://drive.google.com/file/d/1uk9gVk9uRiGXdb7vjmMxxN0aYYLFRMYc/view?usp=drive_link" },
      { id: "1TFTyRcOIYxiJRSWrROY6u2IxOeuHq29_", title: "Digital Product 3", driveLink: "https://drive.google.com/file/d/1TFTyRcOIYxiJRSWrROY6u2IxOeuHq29_/view?usp=drive_link" },
      { id: "1YQ8eh_BhsPc2oi2TgA6EnwPYM5mAX-jO", title: "Digital Product 4", driveLink: "https://drive.google.com/file/d/1YQ8eh_BhsPc2oi2TgA6EnwPYM5mAX-jO/view?usp=drive_link" },
      { id: "14caIZ0fmMDS9XpLWRggyRketkvjKou59", title: "Digital Product 5", driveLink: "https://drive.google.com/file/d/14caIZ0fmMDS9XpLWRggyRketkvjKou59/view?usp=drive_link" },
    ],
  },
  {
    name: "Montage Videos",
    folderLink: "https://drive.google.com/drive/folders/17p4g6jis_WrQGHqEAyapQPNInNMIwplJ?usp=drive_link",
    videos: [
      { id: "12N4fPIdf3BLeZR9qD7zDi-Hqo3IneniQ", title: "Montage Video 1", driveLink: "https://drive.google.com/file/d/12N4fPIdf3BLeZR9qD7zDi-Hqo3IneniQ/view?usp=drive_link" },
      { id: "1piUzDzLFvZmI0lkQgdT5HIja_LZ0fSQl", title: "Montage Video 2", driveLink: "https://drive.google.com/file/d/1piUzDzLFvZmI0lkQgdT5HIja_LZ0fSQl/view?usp=drive_link" },
      { id: "17DRQ6UweLA3nIErnCqBdYDtu1ALmnCUp", title: "Montage Video 3", driveLink: "https://drive.google.com/file/d/17DRQ6UweLA3nIErnCqBdYDtu1ALmnCUp/view?usp=drive_link" },
      { id: "1eVm3Q4uyWICtMHIJ91nbJF2W9iKt4bNw", title: "Montage Video 4", driveLink: "https://drive.google.com/file/d/1eVm3Q4uyWICtMHIJ91nbJF2W9iKt4bNw/view?usp=drive_link" },
      { id: "1Got-KF4dRvipGodo9kvvLVeO6jWcxMoI", title: "Montage Video 5", driveLink: "https://drive.google.com/file/d/1Got-KF4dRvipGodo9kvvLVeO6jWcxMoI/view?usp=drive_link" },
    ],
  },
  {
    name: "Movie edits",
    folderLink: "https://drive.google.com/drive/folders/1b3JWd81xJt75xm81qzm3gCAt6QWZ8tL0?usp=drive_link",
    videos: [
      { id: "1yR-kT3RT31pfwW7hz-XPYJweoxnSIUED", title: "Movie Edit 1", driveLink: "https://drive.google.com/file/d/1yR-kT3RT31pfwW7hz-XPYJweoxnSIUED/view?usp=drive_link" },
      { id: "16M9BFNmDUYVoihwEFqF5AbbLxdlaCpl9", title: "Movie Edit 2", driveLink: "https://drive.google.com/file/d/16M9BFNmDUYVoihwEFqF5AbbLxdlaCpl9/view?usp=drive_link" },
      { id: "1ImuY-_ASH31xbjuCJ-I7i_IE88PxvHH-", title: "Movie Edit 3", driveLink: "https://drive.google.com/file/d/1ImuY-_ASH31xbjuCJ-I7i_IE88PxvHH-/view?usp=drive_link" },
      { id: "1wiy_eFS2uiRqBZn7MbbW2ZFHjFXsJbpx", title: "Movie Edit 4", driveLink: "https://drive.google.com/file/d/1wiy_eFS2uiRqBZn7MbbW2ZFHjFXsJbpx/view?usp=drive_link" },
      { id: "1GC2sdSQg7QUNXHEq8LxA0zgu5l2hjMT2", title: "Movie Edit 5", driveLink: "https://drive.google.com/file/d/1GC2sdSQg7QUNXHEq8LxA0zgu5l2hjMT2/view?usp=drive_link" },
    ],
  },
  {
    name: "music videos",
    folderLink: "https://drive.google.com/drive/folders/1SUyhQpTHHWa9G7NeTOH79LfEmO_Fv3Lt?usp=drive_link",
    videos: [
      { id: "1YaGkUQ6wGJ3zRihCcLl4J41zy1w3jPoL", title: "Music Video 1", driveLink: "https://drive.google.com/file/d/1YaGkUQ6wGJ3zRihCcLl4J41zy1w3jPoL/view?usp=drive_link" },
      { id: "1hk1yz5tX9RBAzCfqmBPlBuY8QLFdrfYE", title: "Music Video 2", driveLink: "https://drive.google.com/file/d/1hk1yz5tX9RBAzCfqmBPlBuY8QLFdrfYE/view?usp=drive_link" },
      { id: "1zJPCdpuCXlnnP8epcX40ogGtaevEEbAk", title: "Music Video 3", driveLink: "https://drive.google.com/file/d/1zJPCdpuCXlnnP8epcX40ogGtaevEEbAk/view?usp=drive_link" },
      { id: "1LB2F0ny3nN3vwr9VgGan8EDlGSNyCjvQ", title: "Music Video 4", driveLink: "https://drive.google.com/file/d/1LB2F0ny3nN3vwr9VgGan8EDlGSNyCjvQ/view?usp=drive_link" },
      { id: "1RHsdRy9-_ni6Ut1Z-c02Ac7-4YO1cun7", title: "Music Video 5", driveLink: "https://drive.google.com/file/d/1RHsdRy9-_ni6Ut1Z-c02Ac7-4YO1cun7/view?usp=drive_link" },
      { id: "1mbaghd04NZPsZzfTHIkxvRgMf2IeRpGa", title: "Music Video 6", driveLink: "https://drive.google.com/file/d/1mbaghd04NZPsZzfTHIkxvRgMf2IeRpGa/view?usp=drive_link" },
    ],
  },
  {
    name: "Podcast/long form",
    folderLink: "https://drive.google.com/drive/folders/1s19BEqw_4sjSealtlsv-SUxtxFf2Cbfo?usp=drive_link",
    videos: [
      { id: "1Z1SdN7ohl88Az4YxifXOa9mcEmtu0au8", title: "Podcast/Long Form 1", driveLink: "https://drive.google.com/file/d/1Z1SdN7ohl88Az4YxifXOa9mcEmtu0au8/view?usp=drive_link" },
      { id: "1inAXqwnLFXNmhQ6WUpdgJtoYz0VZZUDH", title: "Podcast/Long Form 2", driveLink: "https://drive.google.com/file/d/1inAXqwnLFXNmhQ6WUpdgJtoYz0VZZUDH/view?usp=drive_link" },
      { id: "1_pn7HONVKK55n8IODsm64I55J2sVognx", title: "Podcast/Long Form 3", driveLink: "https://drive.google.com/file/d/1_pn7HONVKK55n8IODsm64I55J2sVognx/view?usp=drive_link" },
      { id: "1096Ce1u_COaqtOWxOqwUCPuVBwL2E1i8", title: "Podcast/Long Form 4", driveLink: "https://drive.google.com/file/d/1096Ce1u_COaqtOWxOqwUCPuVBwL2E1i8/view?usp=drive_link" },
      { id: "13Yu-oZR61IEUWIBWtR6ETalRhqhhcB2-", title: "Podcast/Long Form 5", driveLink: "https://drive.google.com/file/d/13Yu-oZR61IEUWIBWtR6ETalRhqhhcB2-/view?usp=drive_link" },
    ],
  },
  {
    name: "Real-Estate",
    folderLink: "https://drive.google.com/drive/folders/1hjiC_yYetjDWx8Hsa4R9RAJcM1MglQPS?usp=sharing",
    videos: [
      { id: "1ca_9p71UUIJZ8zwXGK05Dzah_jjye9Ex", title: "Real Estate 1", driveLink: "https://drive.google.com/file/d/1ca_9p71UUIJZ8zwXGK05Dzah_jjye9Ex/view?usp=drive_link" },
      { id: "1AjBzuASxgtA2QkYtepWv0YtvZB-CUAY6", title: "Real Estate 2", driveLink: "https://drive.google.com/file/d/1AjBzuASxgtA2QkYtepWv0YtvZB-CUAY6/view?usp=drive_link" },
      { id: "1ffgzogzd54XO2vBReXkPKNzgRKQ06ccB", title: "Real Estate 3", driveLink: "https://drive.google.com/file/d/1ffgzogzd54XO2vBReXkPKNzgRKQ06ccB/view?usp=drive_link" },
      { id: "1vbLGL62ZrfK82EbkG9vrSMrzT_VQbChh", title: "Real Estate 4", driveLink: "https://drive.google.com/file/d/1vbLGL62ZrfK82EbkG9vrSMrzT_VQbChh/view?usp=drive_link" },
      { id: "1n9YC16fe5bEKLRSIUahWZbmSzBc-1Uae", title: "Real Estate 5", driveLink: "https://drive.google.com/file/d/1n9YC16fe5bEKLRSIUahWZbmSzBc-1Uae/view?usp=drive_link" },
      { id: "1mzXTzaSGpNO0-7hLXSh1x4eOrzXINkNL", title: "Real Estate 6", driveLink: "https://drive.google.com/file/d/1mzXTzaSGpNO0-7hLXSh1x4eOrzXINkNL/view?usp=drive_link" },
    ],
  },
  {
    name: "Reels/TikTok",
    folderLink: "https://drive.google.com/drive/folders/1E4vLV4vdAabAtWPUrwgg_LN8iMU7zFhU?usp=drive_link",
    videos: [
      { id: "1eyxc-j7SmF_P69DL0oqcFxeCCqjPfscJ", title: "Reel/TikTok 1", driveLink: "https://drive.google.com/file/d/1eyxc-j7SmF_P69DL0oqcFxeCCqjPfscJ/view?usp=sharing" },
      { id: "1nlx5VSGk7mUeX7YeHmPdDeTTPtLESi7F", title: "Reel/TikTok 2", driveLink: "https://drive.google.com/file/d/1nlx5VSGk7mUeX7YeHmPdDeTTPtLESi7F/view?usp=drive_link" },
      { id: "17Ep5Ui7fjVt7n8ESuyvIjgk78rRrOOXc", title: "Reel/TikTok 3", driveLink: "https://drive.google.com/file/d/17Ep5Ui7fjVt7n8ESuyvIjgk78rRrOOXc/view?usp=drive_link" },
      { id: "18ytVl-cjtw6B4xRxOdAh9mRRJ1OMmctG", title: "Reel/TikTok 4", driveLink: "https://drive.google.com/file/d/18ytVl-cjtw6B4xRxOdAh9mRRJ1OMmctG/view?usp=drive_link" },
      { id: "19Q2bFWr_UBi1H4B7ACf3rLbOdleo6Q14", title: "Reel/TikTok 5", driveLink: "https://drive.google.com/file/d/19Q2bFWr_UBi1H4B7ACf3rLbOdleo6Q14/view?usp=drive_link" },
      { id: "14kW8MlCCe9JRR9yxPOhnreeZVTbzweUM", title: "Reel/TikTok 6", driveLink: "https://drive.google.com/file/d/14kW8MlCCe9JRR9yxPOhnreeZVTbzweUM/view?usp=drive_link" },
    ],
  },
  {
    name: "sports/highlights",
    folderLink: "https://drive.google.com/drive/folders/1rf5TmFx6XvQIjBZ0UbfUgO1KdVAJ0v6j?usp=drive_link",
    videos: [
      { id: "1H2w3qtHauR1zN-nt4N_mqZcaC33nkBaq", title: "Sports/Highlights 1", driveLink: "https://drive.google.com/file/d/1H2w3qtHauR1zN-nt4N_mqZcaC33nkBaq/view?usp=drive_link" },
      { id: "1F0CQT6RvmSfuhCXC-fIPtatTCQI_1pS5", title: "Sports/Highlights 2", driveLink: "https://drive.google.com/file/d/1F0CQT6RvmSfuhCXC-fIPtatTCQI_1pS5/view?usp=drive_link" },
      { id: "136gM5511VQNTcgL_1_RYL2LuIipt-EN6", title: "Sports/Highlights 3", driveLink: "https://drive.google.com/file/d/136gM5511VQNTcgL_1_RYL2LuIipt-EN6/view?usp=drive_link" },
      { id: "1J3m-u_NMVATKcdAu5FHhw5WbskyumEaS", title: "Sports/Highlights 4", driveLink: "https://drive.google.com/file/d/1J3m-u_NMVATKcdAu5FHhw5WbskyumEaS/view?usp=drive_link" },
      { id: "14XnfXNfgYCbQeeU8ht-a_a0Rww5YkoXD", title: "Sports/Highlights 5", driveLink: "https://drive.google.com/file/d/14XnfXNfgYCbQeeU8ht-a_a0Rww5YkoXD/view?usp=drive_link" },
      { id: "1Abi3ekD2RycaM7NbNOabQy_796Gxtb8m", title: "Sports/Highlights 6", driveLink: "https://drive.google.com/file/d/1Abi3ekD2RycaM7NbNOabQy_796Gxtb8m/view?usp=drive_link" },
    ],
  },
  {
    name: "Vlogs",
    folderLink: "https://drive.google.com/drive/folders/1FRefWGc5HrBsG3O5OAxquyErEftm4soP?usp=drive_link",
    videos: [
      { id: "1ghokM8kLonfohH5gezdFBDnRSfLGft4T", title: "Vlog 1", driveLink: "https://drive.google.com/file/d/1ghokM8kLonfohH5gezdFBDnRSfLGft4T/view?usp=drive_link" },
      { id: "1_mmVVN9k3hAVUh4nHozWLux7Z6FgeKbr", title: "Vlog 2", driveLink: "https://drive.google.com/file/d/1_mmVVN9k3hAVUh4nHozWLux7Z6FgeKbr/view?usp=drive_link" },
      { id: "1-dWkdFfQo3sjhqnUan-6aJGmLYTL3v5t", title: "Vlog 3", driveLink: "https://drive.google.com/file/d/1-dWkdFfQo3sjhqnUan-6aJGmLYTL3v5t/view?usp=drive_link" },
      { id: "1f_w0sbqlcxm7MURvei4J2m0A4mVbNqwq", title: "Vlog 4", driveLink: "https://drive.google.com/file/d/1f_w0sbqlcxm7MURvei4J2m0A4mVbNqwq/view?usp=drive_link" },
      { id: "1A_Oh9kC8HiZBzBT9iHJ2pOV2JA2GYxm8", title: "Vlog 5", driveLink: "https://drive.google.com/file/d/1A_Oh9kC8HiZBzBT9iHJ2pOV2JA2GYxm8/view?usp=drive_link" },
    ],
  },
  {
    name: "Random",
    folderLink: "https://drive.google.com/drive/folders/1xXgQ1eK4WCOx4VclNvhADPYerI8_F6YS?usp=sharing",
    videos: [
      { id: "1QSukmj-MahdVKrrdK81uaYYksM7Zjmk8", title: "Random 1", driveLink: "https://drive.google.com/file/d/1QSukmj-MahdVKrrdK81uaYYksM7Zjmk8/view?usp=drive_link" },
      { id: "1xtFqXmXNZzWBmCg-ubLDWs-lS85g8msp", title: "Random 2", driveLink: "https://drive.google.com/file/d/1xtFqXmXNZzWBmCg-ubLDWs-lS85g8msp/view?usp=drive_link" },
      { id: "1OQLCI4QWpWbvI8VjlUDWdy0hCWGp0T-u", title: "Random 3", driveLink: "https://drive.google.com/file/d/1OQLCI4QWpWbvI8VjlUDWdy0hCWGp0T-u/view?usp=drive_link" },
      { id: "1iG1pyxZcKWzibsRJ9odiCmoptCSbOecy", title: "Random 4", driveLink: "https://drive.google.com/file/d/1iG1pyxZcKWzibsRJ9odiCmoptCSbOecy/view?usp=drive_link" },
      { id: "1wcwVRPTXHa6vp2x7CWl48ikKVJBtmmpy", title: "Random 5", driveLink: "https://drive.google.com/file/d/1wcwVRPTXHa6vp2x7CWl48ikKVJBtmmpy/view?usp=drive_link" },
      { id: "17HU8RQTwLR3iI5Q75G78ctwsdcagOclq", title: "Random 6", driveLink: "https://drive.google.com/file/d/17HU8RQTwLR3iI5Q75G78ctwsdcagOclq/view?usp=drive_link" },
      { id: "1xgGQK5zCB1VF2Bx3RZK6gnShyExUX5R8", title: "Random 7", driveLink: "https://drive.google.com/file/d/1xgGQK5zCB1VF2Bx3RZK6gnShyExUX5R8/view?usp=drive_link" },
      { id: "1ArONvOsSIfk6I96PZg7t13v7n1cx3zZ1", title: "Random 8", driveLink: "https://drive.google.com/file/d/1ArONvOsSIfk6I96PZg7t13v7n1cx3zZ1/view?usp=drive_link" },
    ],
  },
];

// Flatten all videos for the showcase
const videoFiles = videoCategories.flatMap(category => category.videos);

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const nextVideo = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((selectedVideo + 1) % videoFiles.length);
    }
  };

  const prevVideo = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((selectedVideo - 1 + videoFiles.length) % videoFiles.length);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6 text-center">
          Featured Videos
        </h3>
        <p className="text-foreground font-semibold text-lg md:text-xl text-center mb-8 font-body max-w-3xl mx-auto">
          A selection of <span className="highlight-text">video edits</span>, <span className="highlight-text">reels</span>, <span className="highlight-text">montages</span>, and <span className="highlight-text">creative video content</span> with autoplay previews.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {videoFiles.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg glass-card cursor-pointer aspect-[9/16]"
              onClick={() => setSelectedVideo(index)}
            >
              <div className="w-full h-full relative bg-secondary/20">
                <iframe
                  src={getDriveVideoUrl(video.id, true)}
                  title={video.title}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  style={{ pointerEvents: 'none' }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white">
                    <Play className="w-8 h-8" />
                    <span className="font-body text-sm font-semibold">Click to view fullscreen</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-body text-xs">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedVideo !== null && (
          <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
            <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative"
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </button>

                {videoFiles.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevVideo();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                      aria-label="Previous video"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextVideo();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                      aria-label="Next video"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="relative">
                  <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                    <iframe
                      src={getDriveVideoUrl(videoFiles[selectedVideo].id, true)}
                      title={videoFiles[selectedVideo].title}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-body text-base">
                        {videoFiles[selectedVideo].title}
                      </p>
                      <a
                        href={videoFiles[selectedVideo].driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open in Google Drive
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    {videoFiles.length > 1 && (
                      <p className="text-white/70 text-xs mt-2 font-body">
                        {selectedVideo + 1} of {videoFiles.length}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoShowcase;
