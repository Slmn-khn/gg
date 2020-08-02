package com.gg.imageloader.model

import com.google.gson.annotations.SerializedName

data class Preview (@SerializedName("images")
var images:List<ApiImages>)
