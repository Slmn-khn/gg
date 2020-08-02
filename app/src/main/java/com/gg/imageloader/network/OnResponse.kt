package com.gg.imageloader.network

import com.gg.imageloader.model.BaseResponse

interface OnResponse {
    fun onSuccess(response: BaseResponse)
    fun onFailure(error:String)
}