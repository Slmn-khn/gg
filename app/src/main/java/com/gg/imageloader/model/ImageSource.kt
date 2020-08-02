package com.gg.imageloader.model

import com.google.gson.annotations.SerializedName

data class ImageSource(
    @SerializedName("url")
    var url: String,
    @SerializedName("width")
    var imageWidth:Int,
    @SerializedName("height")
    var imageHeight:Int
)
