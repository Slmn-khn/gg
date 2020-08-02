package com.gg.imageloader.model

import com.google.gson.annotations.SerializedName

data class ApiImages(
    @SerializedName("source")
    var source: ImageSource?,
    @SerializedName("resolutions")
    var resolutions:List<ImageSource>?
)
