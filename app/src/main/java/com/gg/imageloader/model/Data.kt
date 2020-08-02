package com.gg.imageloader.model

import com.google.gson.annotations.SerializedName

data class Data(@SerializedName("children")
var children : List<Children>)