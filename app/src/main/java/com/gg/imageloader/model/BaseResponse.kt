package com.gg.imageloader.model

import com.google.gson.annotations.SerializedName

data class BaseResponse(
    @SerializedName("data")
    var data: Data
) {

}
