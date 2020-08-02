package com.gg.imageloader.di

import com.gg.imageloader.network.NetworkApi
import com.gg.imageloader.utils.Constant
import org.koin.dsl.module
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

val retrofitModule = module {
    single {//Singleton Component
        getNetworkApi()
    }
}

/**
 * Used to get the instance of Network Api
 */
private fun getNetworkApi(): NetworkApi {
    return Retrofit.Builder().baseUrl(Constant.BASE_URL)
        .addConverterFactory(GsonConverterFactory.create()).build().create(NetworkApi::class.java)
}