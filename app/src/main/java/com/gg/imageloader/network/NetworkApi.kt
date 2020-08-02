package com.gg.imageloader.network

import com.gg.imageloader.model.BaseResponse
import retrofit2.Call
import retrofit2.http.GET

interface NetworkApi {
    @GET("r/images/hot.json")
    fun getImages() : Call<BaseResponse>

}