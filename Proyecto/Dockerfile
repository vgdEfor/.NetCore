# Nuestra solución utiliza un proyecto .NET Core startup basado en
# .NET Core 3.1. En https://hub.docker.com/publishers/microsoftowner
# hay disponible una lista de proveedores.

# Descarga las instrucciones de Docker para montar un entorno
# que soporte ASPNET Core 3.1 y las nombra "base".
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
# "base" también crea un directorio en la raíz de la imagen llamada app.
# También entra en ella y ejecuta las demás acciones después de ella
# Hasta que se describe otro WORKDIR.
WORKDIR /app
# También expone los puertos 80 y 443 para que puedan ser consumidos
# desde el exterior. Por ejemplo, desde la máquina anfitriona.
EXPOSE 80
EXPOSE 443

# Descarga las instrucciones de Docker para montar el SDK
# para .NET Core 3.1 y las nombra "build".
FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
# Además, crea el directorio /src y entra en ella.
WORKDIR /src
# La tarea copiará el proyecto dentro de la carpeta relativa a este archivo
# "es.efor.Musaat.Maingateway" de la máquina anfitriona y la pegará en
# /src/es.efor.Musaat.Maingateway en la imagen de destino.
COPY ["es.efor.Musaat.MainGateway/*.csproj", "es.efor.Musaat.MainGateway/"]

# Se ejecutará el comando "dotnet restore xxx" en la imagen de destino 
# para restaurar las dependencias de NuGet del proyecto.
RUN dotnet restore "es.efor.Musaat.MainGateway/es.efor.Musaat.MainGateway.csproj"
# Copiará TODOS los archivos y carpetas de la solución (misma carpeta
# que Dockerfile) y las pegará en /src, a exepción de los que se mencionan
# en el archivo .dockerignore.
COPY . .
# Cambia al directorio /src/es.efor.Musaat.MainGateway. No lo crea, puesto que
# ya se ha creado al copiar el proyecto anteriormente.
WORKDIR "/src/es.efor.Musaat.MainGateway"
# Ejecuta el comando "dotnet build xxx" en la imagen de destino,
# con la configuración Release. La aplicación compilada se llevará a la carpeta
# /app/build en la imagen de destino.
RUN dotnet build "es.efor.Musaat.MainGateway.csproj" -c Release -o /app/build

# Crea la instrucción "publish" usando las denominadas en "build" como base.
FROM build AS publish
# Ejecuta "dotnet publish xxx" con configuración Release.
# La compilación publicada se llevará a /app/publish en la imagen de destino.
RUN dotnet publish "es.efor.Musaat.MainGateway.csproj" -c Release -o /app/publish

# Crea la instrucción "final", que además incorporará las de "base".
FROM base AS final
# Crea el directorio /app en la imagen de destino de Docker, o entra en ella
# si ya existe.
WORKDIR /app
# Copia los archivos y carpetas de la instrucción "publish" a /app
# en la imagen de destino (el último argumento, "." es la carpeta de destino)
# --from se utiliza para decirle a la imagen que coja el resultado del
# conjunto de instrucciones "publish".
COPY --from=publish /app/publish .
# Establece que, cuando se inicie la imagen de Docker, deberá ejecutarse
# el comando "dotnet" con el argumento "es.efor.Musaat.Maingateway.dll".
# Es decir: dotnet /app/
ENTRYPOINT ["dotnet", "es.efor.Musaat.MainGateway.dll"]
